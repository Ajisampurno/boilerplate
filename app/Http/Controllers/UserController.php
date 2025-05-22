<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
use Yajra\DataTables\DataTables;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function datatable()
    {
        $data = DB::table('users')->select(['id', 'name', 'email', 'created_at']);
        return DataTables::of($data)
            ->make(true);
    }

    public function show($id)
    {
        $data = User::find($id);
        return response()->json($data, 200);
    }

    public function destroy($id)
    {
        User::find($id)->delete();
        return response()->json(['message' => 'User deleted successfully.'], 200);
    }

    public function edit($id)
    {
        $data = User::find($id);
        return response()->json($data, 200);
    }

    public function update(Request $request, $id)
    {
        $validate = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email,' . $id,
            'password' => 'required|string|min:8|confirmed',
        ]);

        User::where('id',$id)->update([
            'name' => $validate['name'],
            'email' => $validate['email'],
            'password' => Hash::make($validate['password'])
        ]);
        return response()->json(['message' => 'Updated successfully'], 200);
    }
}
