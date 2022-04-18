@extends('layouts.app')

@section('title'){{$post['title']}} @endsection

@section('content')

<div class="card mt-5">
<div class="card-header">
            Post info
        </div>
  <div class="card-body">
  <div>
        <span style="font-size: 1.2rem; font-weight: bold">Title: </span>
                {{$post->title}}
            </div>
            <div>
          <span style="font-size: 1rem; font-weight: bold">Description: </span>
                {{$post->description}}
            </div>
  </div>
</div>


<div class="card mt-5">
<div class="card-header">
           Post Creator info
        </div>
  <div class="card-body">
  <div>
        <span style="font-size: 1.2rem; font-weight: bold">Name: </span>
                {{$post->user->name}}
            </div>
            <div>
          <span style="font-size: 1rem; font-weight: bold">Created at: </span>
          {{\Illuminate\Support\Carbon::parse($post->created_at)->format('l jS \\of F Y h:i:s A')}}
            </div>
  </div>
</div>




@endsection
