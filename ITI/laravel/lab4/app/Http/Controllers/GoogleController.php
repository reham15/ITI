<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;
use App\Models\Post;
use App\Models\User;

use Auth;
use Exception;
// use Socialite;



class GoogleController extends Controller
{
   
    public function redirect()
    {
        // dd('redirect');
        // dd(Socialite::driver('google')->redirect());
        return Socialite::driver('google')->redirect();
    }
    public function callback()
    {
        dd('cll');

        try {
            
        
            $googleUser = Socialite::driver('google')->user();
            $existUser = User::where('email',$googleUser->email)->first();
            

            if($existUser) {
                Auth::loginUsingId($existUser->id);
            }
            else {
                $user = new User;
                $user->name = $googleUser->name;
                $user->email = $googleUser->email;
                $user->google_id = $googleUser->id;
                $user->password = md5(rand(1,10000));
                $user->save();
                Auth::loginUsingId($user->id);
            }
            return redirect()->to('posts.index');
        } 
        catch (Exception $e) {
            return 'error';
        }
    }
}
