<?php

namespace App\Http\Controllers;



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