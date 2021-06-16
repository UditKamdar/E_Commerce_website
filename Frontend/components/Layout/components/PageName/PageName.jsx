import React from 'react'
import { useRouter } from 'next/router';
// import { withRouter } from 'next/router'

// function Page({ router }) {
//     {console.log(router.pathname)}
//   return PageName(router.pathname)
// }

// export default withRouter(Page)

// export async function getServerSideProps(context){
//     const {a}= context.query;
//     {console.log(context)}
//     console.log(context.query);
//     console.log({a});
//     return {
//         props : {a}
//     }
// }
//


// export async function TitleName()
// {
//     const { asPath, pathname } = useRouter();
//   console.log(asPath); // '/blog/xyz'
//   console.log(pathname); // '/blog/[slug]'
//   var  a = "";
//   if(asPath == "/contact"){
//         a ="Contact" ;
//         console.log("working");
//   }
//   else if(asPath == "/blog"){
//       a = "Blog"; 
//       console.log("working");
//   }

//   return { props : {a} }
// }
export default function PageName({t}) {
    return (
       <section className="breadcrumb-section set-bg" data-setbg="img/breadcrumb.jpg">
  <div className="container">
    <div className="row">
      <div className="col-lg-12 text-center">
        <div className="breadcrumb__text">
          <h2>{t}</h2>
          <div className="breadcrumb__option">
            <a href="index-2.html">Home</a>
           
            <span>{t}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    )
}
