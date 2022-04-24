<?php

namespace App\Http\Requests;
//use App\Http\Requests\Rule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
class StorePostRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' => ['required','min:3',Rule::unique('posts')->ignore($this->post)],
            'description' => ['required','min:5'],
             'post_creator' => ['exists:users,id'],
                  'avatar' => 'image|mimes:jpg,png|max:2048',
        ];
    }
}
