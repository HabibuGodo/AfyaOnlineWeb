<div id="left-sidebar" class="sidebar">
    <div class="navbar-brand">
        <a href="#"><span>Afya Online</span></a>
        <button type="button" class="btn-toggle-offcanvas btn btn-sm btn-default float-right"><i class="lnr lnr-menu fa fa-chevron-circle-left"></i></button>
    </div>
    <div class="sidebar-scroll">
        <nav id="left-sidebar-nav" class="sidebar-nav">
            <ul id="main-menu" class="metismenu">
                <li class="{{ request()->is('all_news') ? 'active' : '' }}"><a href="/all_users" ><i class="icon-user"></i><span>All Users</span></a></li>
                {{-- <li  class="{{ request()->is('add_post') ? 'active' : '' }}"><a href="/add_post"><i class="icon-home"></i><span>Add Post</span></a></li>
                <li  class="{{ request()->is('all_categories') ? 'active' : '' }}"><a href="/all_categories"><i class="icon-home"></i><span>Categories</span></a></li> --}}
            </ul>
        </nav>
    </div>
</div>