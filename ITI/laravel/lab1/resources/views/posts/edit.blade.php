@extends('layouts.app')
  @section('title')create @endsection
  @section('content')
    <form method="POST" action="{{route('posts.update',['post'=>$post['id']])}}">
            @csrf
            @method('put')
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Title</label>
                <input name="title" type="text" class="form-control" id="exampleFormControlInput1" placeholder="">
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                <textarea name="description" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>

            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Post Creator</label>
                <select name="post_creator" class="form-control">
                    
                        <option value="1"> ahmed</option>
                        <option value="1"> mohamed</option>
                    
                </select>
            </div>

          <button class="btn btn-success">update</button>
        </form>
      @endsection