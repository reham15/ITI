<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\DepartmentResource;
use App\Http\Resources\PostResource;
use App\Models\Department;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class DepartmentController extends Controller
{
    public function index()
    {
        $departments = Department::all();


        return DepartmentResource::collection($departments);


    }

    public function show($DeptId)
    {


        $department = Department::find($DeptId);


        return new DepartmentResource($department);


    }
    public function store( Request $request)
    {

        $data = request()->all();


        $department= Department::create([
            'id' => $data['id'],
            'name' => $data['name'],
            'location' => $data['location'],

        ]);


        return new DepartmentResource($department);


    }
    public function delete($deptId)
    {





        Department::where('id', $deptId)
            ->delete();



    }
    public function update($deptId)
    {
        $post = Department::find($deptId);

        $data = request()->all();
        Department::where('id', $deptId)
            ->update(['name' => $data['name'],
                'location' => $data['location'],


            ]);
        $dept=Department::find($deptId);

        return new DepartmentResource($dept);


    }
}



