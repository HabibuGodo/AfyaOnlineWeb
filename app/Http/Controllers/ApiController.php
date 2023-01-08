<?php

namespace App\Http\Controllers;

use App\Models\Group;
use App\Models\GroupMember;
use App\Models\Message;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\OTP;

class ApiController extends Controller
{
    //
    // send otp to mobile
    public function sendOTP()
    {

        // get phone number
        $mrn = request('mrn');

        // check if phone number is in users table
        $hasPhone = User::where('mrn', $mrn)->first();

        //check if user exist
        if ($hasPhone) {
            //fetch user phone number
            $phone = $hasPhone->phone;

            $this->sendSMS($phone);
            return response()->json([
                'status' => 'success',
                'message' => 'OTP sent successfully',
                'phone' => $phone,
            ]);
        } else {
            return response()->json([
                'status' => 'failed',
                'message' => 'Invalid user',
            ]);
        }
    }




    //  check OTP
    public function checkOTP()
    {
        // get OTP
        $otp = request('otp');

        // get phone number
        $phone = request('phone');

        // check if OTP is correct
        $check_otp = OTP::where('phone', $phone)->first();

        if ($check_otp) {
            //check if otp exists
            if ($check_otp->otp == $otp) {
                //fetch user
                $user = User::where('phone', $phone)->first();
                $check_otp->status = "verified";
                $check_otp->save();

                return response()->json([
                    'status' => 'success',
                    'message' => 'OTP verified',
                    'user' => $user
                ], 200);
            } else {
                return response()->json([
                    'status' => 'failed',
                    'message' => 'OTP is incorrect',
                ]);
            }
        } else {
            return response()->json([
                'status' => $phone,
                'message' => 'OTP incorrect',
            ]);
        }
    }

    //fetch all groups belong to user id

    public function fetchGroups($user_id)
    {

        //find user by user_id
        $user = User::find($user_id);

        //check if user role id is 1
        if ($user->role_id == 1) {
            //fetch all groups
            $groups = Group::all();
        } else {
            //fetch groups where user is a member
            $groups = Group::join('group_members', 'groups.id', '=', 'group_members.group_id')->where('group_members.user_id', $user_id)->where('group_members.status', 'active')->where('groups.status', 'active')->select('groups.*')->get();
        }


        return response()->json([
            'data' => $groups
        ], 200);
    }

    //Send message
    public function sendMessage(Request $request)
    {
        //validate



    }

    //create chat message
    public function createMessage(Request $request)
    {
        //validate
        // $request->validate([
        //     'message' => 'required',
        // ]);

        //insert data into notification badge with user id in array student except current user
        $members =  GroupMember::where('group_id',  $request->group_id)->where('user_id', '!=', $request->sender_id)->get();
        //fetch group members belong to group


        $members_ids = [];
        $receiver_read = [];
        foreach ($members as $member) {
            array_push($members_ids, ['id' => $$member->user_id]);
            array_push($receiver_read, ['id' => $$member->user_id]);
        }

        $message = new Message();
        $message->group_id = $request->group_id;
        $message->sender_id = $request->sender_id;
        $message->receiver_id = json_encode($members_ids);
        $message->receiver_read = json_encode($receiver_read);
        $message->message = $request->message;
        $message->save();

        return response()->json([
            'status' => 'success',
            'message' => 'Message sent successfully',
        ]);
    }



    //fetch all messages belong to group id
    public function fetchMessages($group_id)
    {

        //find group by group_id
        $group = Group::find($group_id);

        //check if group is active
        if ($group->status == 'active') {
            //fetch all messages or by created time

            $messages = Message::where('group_id', $group_id)->orderBy('created_at', "desc")->get();
            return response()->json([
                'data' => $messages
            ], 200);
        }
    }





    // send SMS here
    public function sendSMS($phone)
    {
        // add +255 in phone
        $phoneFormatted = '+255' . substr($phone, 1);
        // generate OTP
        $otp = rand(1000, 9999);

        $otp = 1234;

        $created_at = Carbon::now();

        // one minute expire
        $expire = Carbon::now()->addMinute(1);

        // $message = "Your Verification PIN is: " . $otp;

        // $curl = curl_init();
        // curl_setopt_array($curl, array(
        //     CURLOPT_URL => 'https://19gr61.api.infobip.com/sms/2/text/advanced',
        //     CURLOPT_RETURNTRANSFER => true,
        //     CURLOPT_ENCODING => '',
        //     CURLOPT_MAXREDIRS => 10,
        //     CURLOPT_TIMEOUT => 0,
        //     CURLOPT_FOLLOWLOCATION => true,
        //     CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        //     CURLOPT_CUSTOMREQUEST => 'POST',
        //     CURLOPT_POSTFIELDS => '{
        //    "messages":[
        //        {
        //            "from":"SmartUni",
        //            "destinations":[{"to":"' . $phoneFormatted . '"}],
        //            "text":"' . $message . '"
        //        }
        //    ]
        //    }',
        //     CURLOPT_HTTPHEADER => array(
        //         'Authorization: App 01dcedd5bff5aca91fd602b33b37fa2b-f2012b44-34c8-49ab-aee5-f3481bb74cf2',
        //         'Content-Type: application/json',
        //         'Accept: application/json'
        //     ),
        // ));

        // $response = curl_exec($curl);
        // // dd($response);
        // //  var_dump($response);
        // curl_close($curl);

        $check_phone = OTP::where('phone', $phone)->first();



        if ($check_phone) {
            // update OTP
            $check_phone->update([
                'otp' => $otp,
                'created' => $created_at,
                'expire_at' => $expire,
            ]);
        } else {
            // create OTP
            OTP::create([
                'phone' => $phone,
                'otp' => $otp,
                'created' => $created_at,
                'expire_at' => $expire,
            ]);
        }
    }
}