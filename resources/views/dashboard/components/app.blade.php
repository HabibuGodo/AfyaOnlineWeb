<!doctype html>
<html lang="en">

<head>
    <title>@yield('title')</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <meta name="description" content="Afya Online">

    <link rel="icon" href="favicon.ico" type="image/x-icon">
    <!-- VENDOR CSS -->
    <link rel="stylesheet" href="{{asset('dashboard/vendor/bootstrap/css/bootstrap.min.css')}}">
    <link rel="stylesheet" href="{{asset('dashboard/vendor/font-awesome/css/font-awesome.min.css')}}">
    <link rel="stylesheet" href="{{asset('dashboard/vendor/summernote/dist/summernote.css')}}" />

    <!-- MAIN CSS -->
    <link rel="stylesheet" href="{{asset('dashboard/css/main.css')}}">
    <link rel="stylesheet" href="{{asset('dashboard/css/color_skins.css')}}">
</head>

<body class="theme-dark">

    <div id="wrapper">

        {{-- TOP NAVBAR --}}
        @include('dashboard.components.top_nav')

        @include('dashboard.components.sidebar')

        <div id="main-content">
           @yield('pages')
        </div>

    </div>

    <!-- Javascript -->
    <script src="{{asset('dashboard/bundles/libscripts.bundle.js')}}"></script>
    <script src="{{asset('dashboard/bundles/vendorscripts.bundle.js')}}"></script>


    <script src="{{asset('dashboard/bundles/mainscripts.bundle.js')}}"></script>
    <script src="{{asset('dashboard/vendor/summernote/dist/summernote.js')}}"></script>

    <script>
        jQuery(document).ready(function() {

            $('.summernote').summernote({
                height: 600, // set editor height
                minHeight: null, // set minimum height of editor
                maxHeight: null, // set maximum height of editor
                focus: false, // set focus to editable area after initializing summernote
                popover: {
                    image: [],
                    link: [],
                    air: []
                }
            });

            $('.inline-editor').summernote({
                airMode: true
            });

        });

        window.edit = function() {
                $(".click2edit").summernote()
            },

            window.save = function() {
                $(".click2edit").summernote('destroy');
            }
    </script>
</body>
</html>