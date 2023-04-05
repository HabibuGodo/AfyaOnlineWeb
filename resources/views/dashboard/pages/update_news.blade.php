@extends('dashboard.components.app')

@section('title', 'Update Post | Afya Online')
@section('pages')
<div class="block-header">
    <div class="row clearfix">
        <div class="col-md-6 col-sm-12">
            <h2>Update Post</h2>
        </div>
        <div class="col-md-6 col-sm-12 text-right">
            <ul class="breadcrumb">
                <li class="breadcrumb-item"><a href="index-2.html"><i class="icon-home"></i></a></li>
                <li class="breadcrumb-item"><a href="blog-dashboard.html">Update</a></li>
                <li class="breadcrumb-item active">Post</li>
            </ul>
        </div>
    </div>
</div>
<div class="container-fluid">

    <div class="row clearfix">
        <div class="col-lg-12">
            <form action="/update_post" method="post" enctype="multipart/form-data">
                @csrf
                <div class="card">
                    <div class="body">
                        <input type="hidden" name="id" value="{{$news->id}}">
                        <div class="form-group">
                            <label for="">Post Title</label>
                            <input type="text" class="form-control" value="{{$news->title}}" name="title"
                                placeholder="Enter post title.." />
                            <small class="text-danger">
                                @error('title')
                                {{ $message }}
                                @enderror
                            </small>
                        </div>
                        <div class="form-group">
                            <label for="">Display Image</label>
                            <input type="file" class="form-control" name="image" />
                            <small class="text-danger">
                                @error('image')
                                {{ $message }}
                                @enderror
                            </small>
                        </div>
                        <div class="form-group">
                            <label for="">Post Category</label>
                            <select class="form-control show-tick" name="category">
                                <option value="">Select Category</option>
                                @foreach ($allCategories as $category)
                                <option value="{{ $category->id }}" @if ($category->id == $news->category_id)
                                    selected
                                    @endif>{{ $category->category }}</option>
                                @endforeach
                            </select>
                            <small class="text-danger">
                                @error('category')
                                {{ $message }}
                                @enderror
                            </small>
                        </div>
                        <label for="">Post Content</label>
                        <textarea class="summernote" name="content">
                            {{ $news->content }}
                        </textarea>
                        <small class="text-danger">
                            @error('content')
                            {{ $message }}
                            @enderror
                        </small>
                        <button type="submit" class="btn btn-block btn-primary   m-t-20">Upadte Post Now</button>
                    </div>
                </div>
            </form>

        </div>
    </div>

</div>
@endsection