    @extends('layouts.app')
    @section('title') index @endsection
    @section('content')

    <div class="text-center">
            <a href="{{route('posts.create')}}" class="mt-4 btn btn-success">Create Post</a>
        </div>
        <table class="table mt-4">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Posted By</th>
                <th scope="col">Created At</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
            @foreach($posts as $post)
              <tr>
                <td>{{$post->id}}</th>
                <td>{{ $post->title }}</td>
                <td>{{ $post->user->name }}</td>
                <td>{{\Illuminate\Support\Carbon::parse($post->created_at)->format("Y-m-d")}}</td>
                <td>
                    <a href="{{route('posts.show',['post' => $post['id']])}}" class="btn btn-info">View</a>
                    <a href="{{route('posts.edit',['post' => $post['id']])}}" class="btn btn-primary">Edit</a>
                   <form  style="display:inline-block"  method="POST" action="{{route('posts.delete',['post' => $post['id']])}}">
                    @csrf
                    @method('delete')
                    <button  onclick="return confirm('are you sure?')"  class="btn btn-danger ">Delete</button>
                    </form>

                </td>
              </tr>
          
              @endforeach
             
            </tbody>
  </table>
            <div>
            {{ $posts->links() }}
              </div>
    @endsection