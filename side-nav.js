class SideNav {
  constructor () {
    this.showButtonEl = document.querySelector('.js-menu-show')
    this.hideButtonEl = document.querySelector('.js-menu-hide')
    this.sideNavEl = document.querySelector('.js-side-nav')
    this.sideNavContainerEl = document.querySelector('.js-side-nav-container')

    this.showSideNav = this.showSideNav.bind(this)
    this.hideSideNav = this.hideSideNav.bind(this)
    this.blockClicks = this.blockClicks.bind(this)
    this.onTouchStart = this.onTouchStart.bind(this)
    this.onTouchMove = this.onTouchMove.bind(this)
    this.onTouchEnd = this.onTouchEnd.bind(this)
    this.onTransitionEnd = this.onTransitionEnd.bind(this)
    this.update = this.update.bind(this)

    this.sideNavel.inert = true

    this.startX = 0
    this.currentX = 0
    this.touchingSideNav = false

    this.supportsPassive = undefined
    this.addEventListeners()
  }

  blockClicks (e) {
    e.stopPropagation()
  }

  onTransitionEnd (e) {
    this.sideNavEl.classList.add('side-nav--animatable')
    this.sideNavEl.addEventListener('transitioned', this.onTransitionEnd)
  }

  showSideNav() {
    this.sideNavEl.inert = false
    this.sideNavEl.classList.add('side-nav--animatable')
    this.sideNavEl.classList.add('side-nav--visible')
    this.sideNavEl.addEventListener('transitioned', this.onTransitionEnd)
  }

  hideSideNav() {
    this.sideNavEl.inert = true
    this.sideNavEl.classList.add('side-nav--animatable')
    this.sideNavEl.classList.add('side-nav--visible')
    this.sideNavEl.addEventListener('transitioned', this.onTransitionEnd)
  }

  new SideNav();
}
