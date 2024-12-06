import{r as d,i as p,a as c,p as u,S as s,x as h,t as m}from"./Header-B6Ex6Cqr.js";var g=Object.defineProperty,b=Object.getOwnPropertyDescriptor,f=(t,r,i,o)=>{for(var e=o>1?void 0:o?b(r,i):r,n=t.length-1,l;n>=0;n--)(l=t[n])&&(e=(o?l(r,i,e):l(e))||e);return o&&e&&g(r,i,e),e};let a=class extends c{get idInput(){return this.renderRoot.querySelector("#idField")}get pwInput(){return this.renderRoot.querySelector("#pwField")}async fetchData(){try{const t=this.idInput.value,r=this.pwInput.value;await u.collection("users").authWithPassword(t,r);const{record:i,token:o}=JSON.parse(localStorage.getItem("pocketbase_auth")??"{}");localStorage.setItem("auth",JSON.stringify({isAuth:!!i,user:i,token:o})),s.fire({title:"로그인 성공!",text:"메인 페이지로 이동합니다.",icon:"success",confirmButtonText:"닫기"}).then(()=>{setTimeout(()=>{location.href="/index.html"},300)})}catch{s.fire({title:"로그인 실패!",text:"아이디 또는 비밀번호가 올바르지 않습니다.",icon:"error",confirmButtonText:"닫기"}).then(()=>{this.idInput.value="",this.pwInput.value=""})}}handleLogin(t){t.preventDefault(),this.fetchData()}render(){return h`
      <div class="container">
        <h1>로그인</h1>
        <hr />
        <form>
          <div>
            <label for="idField"></label>
            <input type="email" id="idField" placeholder="아이디(이메일)" />
          </div>
          <div>
            <label for="pwField"></label>
            <input type="password" id="pwField" placeholder="비밀번호" />
          </div>
          <button
          @click=${this.handleLogin} 
          type="submit" 
          class="login">LOGIN</button>
        </form>

        <a class="register" href="/src/pages/register/">간편 회원가입</a>
      </div>
    `}};a.styles=[d,p`
      .container {
        max-width: 400px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        text-align: center;

        & h1 {
          font-size: 3rem;
          font-weight: bolder;
        }

        & hr {
          margin: 2rem 0;
          height: 4px;
          background-color: white;
        }

        & form {
          margin-bottom: 5rem;

          & input {
            box-sizing: border-box;
            border: 1px solid red;
            padding: 1rem;
            min-width: 300px;
            margin: 0.2rem 0;
            outline: none;

            &:focus {
              border: 1px solid dodgerblue;
            }
          }

          & button[type="submit"] {
            margin-top: 1.5rem;
            border: none;
            background-color: dodgerblue;
            color: white;
            padding: 1rem;
            cursor: pointer;
            width: 100%;
          }
        }
      }
    `];a=f([m("login-element")],a);
