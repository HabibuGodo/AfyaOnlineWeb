<?php

namespace App\Http\Controllers;

use App\Models\Conversation;
use App\Models\Group;
use App\Models\GroupMember;
use App\Models\Message;
use App\Models\MessagesSingle;
use App\Models\NewsFeed;
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

    //update user firebase token
    //update token
    public function updateFirebaseToken()
    {
        $userId = request('userId');
        $firebaseToken = request('firebaseToken');

        $user = User::where('id', $userId)->first();

        //check if student available
        if ($user) {
            // update firebase token
            $user->firebaseToken = $firebaseToken;
            $user->save();
            return response()->json([
                'status' => 'success',
                'message' => 'Firebase token updated successfully',
            ]);
        }
    }

    //create group
    public function createGroup(Request $request)
    {
        //validate
        $request->validate([
            'name' => 'required',
        ]);

        $group = new Group();
        $group->group_name = $request->name;
        $group->save();
        return response()->json([
            'status' => 'success',
            'message' => 'Group created successfully',
            'group' => $group,
        ]);
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

    //fetch all users except the logged in user
    public function fetchUsers($my_id)
    {
        //validate
        $user = User::where('id', '!=', $my_id)->get();
        return response()->json([
            'data' => $user
        ], 200);
    }

    //fetch all users users in specific group
    public function fetchUsersInGroup($my_id, $group_id)
    {
        //validate
        $user = User::where('id', '!=', $my_id)->whereIn('id', function ($query) use ($group_id) {
            $query->select('user_id')->from('group_members')->where('group_id', $group_id);
        })->get();
        return response()->json([
            'data' => $user
        ], 200);
    }

    //fetch all users except the logged in user and user in specific group
    public function fetchUsersNotInGroup($my_id, $group_id)
    {
        //validate
        $user = User::where('id', '!=', $my_id)->whereNotIn('id', function ($query) use ($group_id) {
            $query->select('user_id')->from('group_members')->where('group_id', $group_id);
        })->get();
        return response()->json([
            'data' => $user
        ], 200);
    }

    //save selected users in groupmember table
    public function saveGroupMembers(Request $request)
    {
        $group_id = $request->group_id;
        $selectedUsers = json_decode($request->selectedUsers);

        //froeach user id check if user is already a member
        foreach ($selectedUsers as $user) {
            $check = GroupMember::where('group_id', $group_id)->where('user_id', $user)->first();
            if (!$check) {
                //create new group member
                $groupMember = new GroupMember();
                $groupMember->group_id = $group_id;
                $groupMember->user_id = $user;
                $groupMember->save();
            }
        }
        return response()->json([
            'status' => 'success',
            'message' => 'User added successfully',
        ]);
    }


    // fucion send message
    public function sendMessageSingle()
    {
        // get the message
        $message = request('message');
        $senderId = request('sender_id');
        $receiverId = request('receiver_id');

        // check if conversation exists
        $conversation = Conversation::where(function ($query) use ($senderId) {
            $query->where('sender_id', $senderId)
                ->orWhere('receiver_id', request('sender_id'));
        })->where(function ($query) use ($receiverId) {
            $query->where('sender_id', $receiverId)
                ->orWhere('receiver_id', $receiverId);
        })->first();
        // check if conversation is null
        if ($conversation == null) {
            // create new conversation
            $conversation = Conversation::create([
                'sender_id' => request('sender_id'),
                'receiver_id' => request('receiver_id'),
            ]);
        }
        // create new message
        MessagesSingle::create([
            'conversation_id' => $conversation->id,
            'sender_id' => request('sender_id'),
            'receiver_id' => request('receiver_id'),
            'message' => $message,
        ]);
        // update the last message time
        $conversation->last_message_time = now();
        $conversation->save();
        // reset the message

        return response()->json([
            'status' => 'success',
            'message' => 'Message sent successfully',
        ]);
    }

    //fetch all messages of specific convo
    public function fetchMessagesSingleInConvo($my_id, $receiver_id)
    {
        //fetch all messages
        // $messages = MessagesSingle::where('conversation_id', $convo_id)->orderBy('created_at', 'desc')->get();

        $messages = MessagesSingle::where(function ($query) use ($my_id) {
            $query->where('sender_id', $my_id)
                ->orWhere('receiver_id', $my_id);
        })->where(function ($query) use ($receiver_id) {
            $query->where('sender_id', $receiver_id)
                ->orWhere('receiver_id', $receiver_id);
        })->get();


        return response()->json([
            'data' => $messages
        ], 200);
    }

    //fetch all conversations
    public function fetchConversations($my_id)
    {
        //fetch all conversations
        $allConvo = [];
        $conversations = Conversation::where('sender_id', $my_id)->orWhere('receiver_id', $my_id)->orderBy('last_message_time', 'desc')->get();

        foreach ($conversations as $conversation) {
            $lasmessage = MessagesSingle::where('conversation_id', $conversation->id)->orderBy("id", "desc")->first();
            //count unread message for user my_id
            $totalUnread = MessagesSingle::where('conversation_id', $conversation->id)->where('receiver_id', $my_id)->where('receiver_read', "No")->count();

            if ($conversation->sender_id == $my_id) {
                $user = User::where('id', $conversation->receiver_id)->first();
            } else {
                $user = User::where('id', $conversation->sender_id)->first();
            }
            $conversation->receiver_name = $user->name;
            $conversation->totalUnread = $totalUnread;
            $conversation->last_message = $lasmessage->message;
            $conversation->lastMsgReceiverId = $lasmessage->receiver_id;
            $conversation->receiver_profile = $user->profile;
            $conversation->readStatus = $lasmessage->receiver_read;

            array_push($allConvo, $conversation);
        }
        $totalUnreadAllConvo = MessagesSingle::where('receiver_id', $my_id)->where('receiver_read', "No")->count();

        return response()->json([
            'data' => $allConvo,
            'totalUnreadAllConvo' => $totalUnreadAllConvo
        ], 200);
    }

    //Fetch all messages for logged in user
    public function fetchAllMessages($my_id)
    {
        //fetch all messages
        $messages = MessagesSingle::where('sender_id', $my_id)
            ->orWhere('receiver_id', $my_id)->get();


        return response()->json([
            'data' => $messages
        ], 200);
    }

    //update messages
    public function updateMessagesSingleInConvoRead($convo_id, $my_id, $other_user_id)
    {
        // update read status to 1
        MessagesSingle::where('conversation_id', $convo_id)->where('sender_id', $other_user_id)->where('receiver_id', $my_id)->update(['receiver_read' => 1]);

        return response()->json([
            'status' => 'success',
            'message' => 'Message updated successfully',
        ]);
    }



    //create chat message
    public function createMessage(Request $request)
    {

        //insert data into notification badge with user id in array student except current user
        $members =  GroupMember::where('group_id',  $request->group_id)->where('user_id', '!=', $request->sender_id)->get();
        //fetch group members belong to group


        $members_ids = [];
        $receiver_read = [];
        foreach ($members as $member) {
            array_push($members_ids, ['id' => $member->user_id]);
            array_push($receiver_read, ['id' => $member->user_id]);
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

            $messages = Message::where('group_id', $group_id)->get();
            //check if receiver read is empty

            foreach ($messages as $message) {
                $receiver_read = json_decode($message->receiver_read);
                if ($receiver_read == []) {
                    $message->receiver_read = 1;
                    //1 means all group member read the message
                } else {
                    $message->receiver_read = 0;
                }
            }


            return response()->json([
                'data' => $messages
            ], 200);
        }
    }

    //fetch all groups message of as specific user
    public function fetchAllGroupsMessages($user_id)
    {
        $allGroupsMessages = [];
        $messages = Message::all();
        //for each message check if user id is in sender or receiver
        foreach ($messages as $message) {
            $sender_id = $message->sender_id;
            $receiver_id = $message->receiver_id;
            $receiver_read = $message->receiver_read;
            //check if user id is in receiver id
            $receiver_id = json_decode($receiver_id);
            $receiver_read = json_decode($receiver_read);
            //check if user id is in sender id
            if ($sender_id == $user_id) {

                if ($receiver_read == []) {
                    $message->receiver_read = 0;
                    array_push($allGroupsMessages, $message);
                } else {
                    $message->receiver_read = 1;
                    array_push($allGroupsMessages, $message);
                }
            } else {
                foreach ($receiver_id as $key => $value) {
                    if ($value->id == $user_id) {
                        //check if user id is in receiver read
                        if ($receiver_read == []) {
                            $message->receiver_read = 0;
                            array_push($allGroupsMessages, $message);
                        } else {
                            $message->receiver_read = 1;
                            array_push($allGroupsMessages, $message);
                        }
                    }
                }
            }
        }


        return response()->json([
            'data' => $allGroupsMessages
        ], 200);
    }


    //crete news feed
    public function createFeed(Request $request)
    {
        //validate
        $request->validate([
            'title' => 'required',
            'description' => 'required',
            'image' => 'required|mimes:jpeg,jpg,png|max:10000',
        ]);

        // gete file extension
        $fileExtension = request()->image->getClientOriginalExtension();

        // get file name
        $fileName = time() . '.' . $fileExtension;

        // store file
        request()->image->storeAs('public/newsFeed_photos', $fileName);
        // srequest store publicly
        $fileUrl = 'storage/newsFeed_photos/' . $fileName;

        $feed = new NewsFeed();
        $feed->title = $request->title;
        $feed->description = $request->description;
        $feed->image = $fileUrl;
        $feed->user_id = $request->userId;
        $feed->save();
        return response()->json([
            'status' => 'success',
            'message' => 'Feed created successfully',
            'feed' => $feed
        ]);
    }

    //fetch news feeds
    public function fetchNewsFeeds()
    {
        $feeds = NewsFeed::orderBy('created_at', 'desc')->get();
        return response()->json([
            'status' => 'success',
            'data' => $feeds
        ], 200);
    }

    //delete news feed





    // send SMS here
    public function sendSMS($phone)
    {
        // add +255 in phone
        $phoneFormatted = '+255' . substr($phone, 1);
        // generate OTP
        $otp = rand(1000, 9999);

        // $otp = 1234;

        $created_at = Carbon::now();

        // one minute expire
        $expire = Carbon::now()->addMinute(1);

        $message = "Your Verification PIN is: " . $otp;

        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_URL => 'https://19gr61.api.infobip.com/sms/2/text/advanced',
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'POST',
            CURLOPT_POSTFIELDS => '{
           "messages":[
               {
                   "from":"SmartUni",
                   "destinations":[{"to":"' . $phoneFormatted . '"}],
                   "text":"' . $message . '"
               }
           ]
           }',
            CURLOPT_HTTPHEADER => array(
                'Authorization: App 01dcedd5bff5aca91fd602b33b37fa2b-f2012b44-34c8-49ab-aee5-f3481bb74cf2',
                'Content-Type: application/json',
                'Accept: application/json'
            ),
        ));

        $response = curl_exec($curl);
        // dd($response);
        //  var_dump($response);
        curl_close($curl);

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