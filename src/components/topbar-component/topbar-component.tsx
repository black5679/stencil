import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'topbar-component',
  styleUrl: 'topbar-component.scss',
  shadow: true,
})
export class TopbarComponent {

  render() {
    return (
      <Host>
        <div class="navbar-custom">
        <div class="topbar">
          <div class="topbar-menu d-flex align-items-center gap-1">
              <div class="logo-box">
                <a href="/" class="logo logo-dark text-center">
                  <span class="logo-sm">
                    <img src="" alt="" height="22" />
                  </span>
                  <span class="logo-lg">
                    <img
                      src=""
                      alt=""
                      height="20"
                    />
                  </span>
                </a>
                <a href="/" class="logo logo-light text-center">
                  <span class="logo-sm">
                    <img src="" alt="" height="22" />
                  </span>
                  <span class="logo-lg">
                    <img
                      src=''
                      alt=""
                      height="20"
                    />
                  </span>
                </a>
              </div>

            <button
              class="button-toggle-menu"
            >
              <i class="mdi mdi-menu" />
            </button>

            <div class="dropdown d-none d-xl-block">
            </div>

            <div class="dropdown dropdown-mega d-none d-xl-block">
            </div>
          </div>

          {/* <ul class="topbar-menu d-flex align-items-center">
            <li class="app-search dropdown d-none d-lg-block">
              <TopbarSearch items={SearchResults} />
            </li>
            {/* <li className="dropdown d-inline-block d-lg-none">
              <SearchDropdown />
            </li>
            <li class="dropdown d-none d-lg-inline-block">
              <MaximizeScreen />
            </li>
            <li class="dropdown d-none d-lg-inline-block topbar-dropdown">
              <AppsDropdown />
            </li>
            <li class="dropdown d-none d-lg-inline-block topbar-dropdown">
              <LanguageDropdown />
            </li>
            <li class="dropdown notification-list">
              <NotificationDropdown notifications={Notifications} />
            </li>
            <li class="dropdown">
              <ProfileDropdown
                profilePic={profilePic}
                menuItems={ProfileMenus}
                username={"Geneva"}
                userTitle={"Founder"}
              />
            </li>
            <li>
              <button
                class="nav-link dropdown-toggle right-bar-toggle waves-effect waves-light btn btn-link shadow-none"
                onClick={handleRightSideBar}
              >
                <i class="fe-settings noti-icon font-22"></i>
              </button>
            </li>
          </ul> */}
        </div>
      </div>
      </Host>
    );
  }

}
