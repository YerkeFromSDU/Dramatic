function Header(){
    return (
      <div class = "header">
        <div class="left-header">
            <a href="" class="logo">DRAMATIC</a>
            <a id="link" href="">HOME</a>
            <a id="link" href="">TV SHOW</a>
            <a id="link" href="">MOVIES</a>
            <a id="link" href="">NEW</a>
        </div>
        <div class="right-header">
            <form action="">
                <input id="search-bar" type="text" placeholder="SEARCH"/>
            </form>
            <img id="gift" src="/gift.png" alt="" width="31px" height="31px"/>
            <img id="bell" src="/bella.png" alt="" width="30px" height="30px"/>
            <img id="user" src="/user.png" alt="" width="59px" height="59px"/>
        </div>
        
      </div>
    )
  }
  export default Header