@extends('layouts.app')
@section('title')create @endsection
@section('content')
<form method="POST" action="{{route('posts.update',['post'=>$post['id']])}}">
  @csrf
  @method('put')
  <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Title</label>
    <input name="title" type="text" class="form-control @error('title') is-invalid @enderror" id="exampleFormControlInput1" placeholder="" value="{{$post->title}}">
  </div>
    @error('title')
    <div class="alert alert-danger">{{ $message }}</div>
    @enderror
  <div class="mb-3">
    <label for="exampleFormControlTextarea1" class="form-label">Description</label>
    <textarea name="description" class="form-control @error('description') is-invalid @enderror" id="exampleFormControlTextarea1" rows="3">{{$post->description}}</textarea>
  </div>
    @error('description')
    <div class="alert alert-danger">{{ $message }}</div>
    @enderror

  <div class="mb-3">
    <label for="exampleFormControlTextarea1" class="form-label">Post Creator</label>
    <select name="post_creator" class="form-control @error('post_creator') is-invalid @enderror" value="{{$post->user_id}}">
      @foreach ($users as $user)
      <option value="{{$user->id}}"> {{$user->name}}</option>

      @endforeach

    </select>
  </div>
    @error('post_creator')
    <div class="alert alert-danger">{{ $message }}</div>
    @enderror

  <button class="btn btn-success">update</button>
</form>
@endsection
