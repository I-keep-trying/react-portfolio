const smartScroll = () => {
  window.prevOffset = 0
  var smartScrollThrottle = 0
  const smartScrollHeader = document.getElementById('header-wrap')

  if (new Date().getTime() - smartScrollThrottle < 200) {
    return false
  }
  smartScrollThrottle = new Date().getTime()

  var tempOffset = window.pageYOffset

  if (tempOffset > window.prevOffset + 25 || tempOffset < 100) {
    if (smartScrollHeader) {
      smartScrollHeader.style.top = '-8em'
      smartScrollHeader.style.transition = 'top 666ms'
    }
  }
  if (tempOffset < window.prevOffset - 25 || tempOffset < 75) {
    if (smartScrollHeader) {
      smartScrollHeader.style.top = '0'
    }
  }

  window.prevOffset = window.pageYOffset

  tempOffset =
    tempOffset /
    (document.documentElement.scrollHeight -
      (window.innerHeight || document.documentElement.clientHeight))

  if (tempOffset < 0) {
    tempOffset = 0
  }
  if (tempOffset > 1) {
    tempOffset = 1
  }

  setTimeout(smartScroll, 333) // trigger one more smartScroll event after 333ms when no more event come
  window.addEventListener('scroll', smartScroll)
}

export default smartScroll
