@extends('dashboard.components.app')

@section('title', 'New User | Afya Online')
@section('pages')
    <div class="block-header">
        <div class="row clearfix">
            <div class="col-md-6 col-sm-12">
                <h2>New User</h2>
            </div>
            <div class="col-md-6 col-sm-12 text-right">
                <ul class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#"><i class="icon-home"></i></a></li>
                    <li class="breadcrumb-item"><a href="#">New</a></li>
                    <li class="breadcrumb-item active">User</li>
                </ul>
                {{-- <a href="/add_category" class="btn btn-sm btn-primary" title="">Add Category</a> --}}
            </div>
        </div>
    </div>
    <div class="container-fluid">

        <div class="row clearfix">
            <div class="col-lg-12">
                <form action="/add_user" method="post" enctype="multipart/form-data">
                    @csrf
                    <div class="card">
                        <div class="body">
                            <div class="row">
                                <div class="col-md-6 form-group">
                                    <label for="">Full Name</label>
                                    <input type="text" class="form-control" value="{{ old('name') }}" name="name"
                                        placeholder="Enter full name.." />
                                    <small class="text-danger">
                                        @error('name')
                                            {{ $message }}
                                        @enderror
                                    </small>
                                </div>
                                <div class="col-md-6 form-group">
                                    <label for="">MNR Number</label>
                                    <input type="text" class="form-control" value="{{ old('mrn') }}" name="mrn"
                                        placeholder="Enter MRN Number.." />
                                    <small class="text-danger">
                                        @error('mrn')
                                            {{ $message }}
                                        @enderror
                                    </small>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6 form-group">
                                    <label for="">Phone Number</label>
                                    <input type="number" class="form-control" value="{{ old('phone') }}" name="phone"
                                        placeholder="Enter phone number.." />
                                    <small class="text-danger">
                                        @error('phone')
                                            {{ $message }}
                                        @enderror
                                    </small>
                                </div>
                                <div class="col-md-6 form-group">
                                    <label for="">Email</label>
                                    <input type="text" class="form-control" value="{{ old('email') }}" name="email"
                                        placeholder="Enter email.." />
                                    <small class="text-danger">
                                        @error('email')
                                            {{ $message }}
                                        @enderror
                                    </small>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6 form-group">
                                    <label for="">Gender</label>
                                    <select class="form-control show-tick" value="{{ old('gender') }}" name="gender">
                                        <option value="">Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                                <div class="col-md-6 form-group">
                                    <label for="">Post Category</label>
                                    <select class="form-control show-tick" value="{{ old('role') }}" name="role">
                                        <option value="">Select Role</option>
                                        @foreach ($roles as $role)
                                            <option value="{{ $role->id }}">{{ $role->role_name }}</option>
                                        @endforeach
                                    </select>
                                    <small class="text-danger">
                                        @error('role')
                                            {{ $message }}
                                        @enderror
                                    </small>
                                </div>
                            </div>


                            <button type="submit" class="btn btn-block btn-primary   m-t-20">Add User</button>
                        </div>
                    </div>
                </form>

            </div>
        </div>

    </div>
@endsection
