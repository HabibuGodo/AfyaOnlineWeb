@extends('dashboard.components.app')

@section('title', 'All Users | Afya Online')
@section('pages')

    <div class="block-header">
        <div class="row clearfix">
            <div class="col-md-6 col-sm-12">
                <h2>All Users</h2>
            </div>
            <div class="col-md-6 col-sm-12 text-right">
                <ul class="breadcrumb">
                    <li class="breadcrumb-item"><a href="index-2.html"><i class="icon-home"></i></a></li>
                    <li class="breadcrumb-item">All</li>
                    <li class="breadcrumb-item active">Users</li>
                </ul>
                <a href="/new_user" class="btn btn-sm btn-primary" title="New User">New User</a>
            </div>
        </div>
    </div>



    <div class="container-fluid">
        @if (session()->has('success'))
            <div class="alert alert-success fade show" role="alert">
                <strong>Success!</strong> {{ session('success') }}
            </div>
        @endif
        <div class="row clearfix">

            <div class="table">
                <table class="table table-bordered table-hover table-striped">
                    <thead>
                        <tr>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>MRN</th>
                            <th>Role</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($users as $user)
                            <tr>
                                <td>{{ ucwords($user->name) }}</td>
                                <td>{{ ucwords($user->email) }}</td>
                                <td>{{ ucwords($user->phone) }}</td>
                                <td>{{ ucwords($user->mrn) }}</td>
                                <td>{{ ucwords($user->role->role_name) }}</td>
                                <td >
                                    
                                    

                                    <a class="btn btn-outline-danger btn-sm" href="#" data-toggle="modal"
                                        data-target="#deleteModel{{ $user->id }}">Delete</a>

                                    {{-- <a class="btn btn-outline-primary btn-sm" href="/editUser/{{ $user->id }}">Edit</a> --}}
                                </td>
                            </tr>

                            <!-- delete Modal -->
                            <div class="modal fade" id="deleteModel{{ $user->id }}" tabindex="-1" role="dialog"
                                aria-labelledby="modelTitleId" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title">Delete User</h5>
                                            <button type="button" class="close" data-dismiss="modal"
                                                aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            Are you sure you want to delete
                                            <strong>{{ $user->name }}</strong>
                                            from user list?
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-primary"
                                                data-dismiss="modal">Cancel</button>
                                            <a href="/deleteUser/{{ $user->id }}"><button type="button"
                                                    class="btn btn-danger">
                                                    Delete</button></a>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>

@endsection
