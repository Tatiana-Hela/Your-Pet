"use strict";(self.webpackChunkyour_pet_frontend=self.webpackChunkyour_pet_frontend||[]).push([[339],{4339:function(e,r,o){o.r(r),o.d(r,{default:function(){return D}});var t=o(2791),a=o(1483),i=o(9434),s=o(9869),n=o(1107),l=o(5861),d=o(9439),u=o(4687),c=o.n(u),m=o(7689),f=o(1087),p=o(5705),h=o(6727),x=o(9230),b=o(4554),g=o(8866),F=o(3400),_=o(3710),w=o(9569),Z=o(427),M={form:"registerFormDetails_form__wOm+e",title:"registerFormDetails_title__pAFRD",questionText:"registerFormDetails_questionText__V7bgL",loginLink:"registerFormDetails_loginLink__yz5Gz",buttonContainer:"registerFormDetails_buttonContainer__5y6Jx",button:"registerFormDetails_button__VJfUX","my\u0421omponent":"registerFormDetails_my\u0421omponent__-z0dL",dark:"registerFormDetails_dark__wzPUm"},j=o(8724),v=o(3329),y=h.Ry().shape({name:h.Z_().required("Name is required").matches(/^[a-zA-Z\s]*$/),email:h.Z_().email("Invalid email").required("Email is required").matches(/^(?=.{10,63}$)(([0-9A-Za-z]{1}[-0-9A-z.]{1,}[0-9A-Za-z]{1})@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/,"Invalid email"),password:h.Z_().required("Password is required").min(6,"Password must be at least 6 characters").max(16,"Password must be at most 16 characters").matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([0-9a-zA-Z]{6,})*$/,"Password must contain at least one uppercase letter, one lowercase letter, and one digit"),confirmPassword:h.Z_().required("Confirm password is required").oneOf([h.iH("password"),null],"Passwords must match")}),I={name:"",email:"",password:"",confirmPassword:""},k=function(){var e=(0,t.useState)(!1),r=(0,d.Z)(e,2),o=r[0],s=r[1],n=(0,t.useState)(!1),u=(0,d.Z)(n,2),h=u[0],k=u[1],A=(0,t.useContext)(a.N).theme,C=(0,x.$G)().t,D=(0,m.s0)(),P=function(){return s((function(e){return!e}))},z=function(){return k((function(e){return!e}))},B=(0,i.I0)(),L=function(){var e=(0,l.Z)(c().mark((function e(r){var o;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={name:r.name,email:r.email,password:r.password},e.next=3,B((0,j.z2)(o));case 3:D("/user");case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)("div",{className:"".concat(M["my\u0421omponent"]," ").concat("light"===A?M.light:M.dark),children:(0,v.jsx)(p.J9,{initialValues:I,onSubmit:L,validationSchema:y,children:function(e){var r=e.values,t=e.errors,a=e.touched,i=e.handleSubmit,s=e.handleChange;return(0,v.jsxs)(p.l0,{className:M.form,onSubmit:i,children:[(0,v.jsx)("h2",{className:M.title,children:C("Registration")}),(0,v.jsx)(b.Z,{sx:{marginBottom:"10px",display:"flex",alignItems:"flex-end"},children:(0,v.jsx)(g.Z,{name:"name",type:"text",label:C("Name"),size:"small",fullWidth:!0,sx:{".MuiInputBase-root.MuiOutlinedInput-root":{borderRadius:"40px"},"& .MuiInputLabel-root":{color:"dark"===A&&"#b2abab"},"& .MuiInputLabel-root.Mui-focused":{color:"light"===A?"#54ADFF":"#183a3d"},"& .MuiOutlinedInput-root":{"& fieldset":{borderRadius:40,border:"1px solid ".concat("light"===A?"#54ADFF":"#2f5a5f")},"&:hover fieldset":{borderColor:"".concat("light"===A?"#54ADFF":"#d9d2d2")},"&.Mui-focused fieldset":{borderColor:"".concat("light"===A?"#54ADFF":"#2f5a5f"),borderWidth:"2px"},"& .MuiInputBase-input":{color:"dark"===A&&"#d9d2d2"}}},onChange:s,value:r.name,error:a.name&&Boolean(t.name),helperText:a.name&&t.name})}),(0,v.jsx)(b.Z,{sx:{marginBottom:"10px",display:"flex",alignItems:"flex-end"},children:(0,v.jsx)(g.Z,{name:"email",type:"email",label:C("Email"),size:"small",fullWidth:!0,sx:{".MuiInputBase-root.MuiOutlinedInput-root":{borderRadius:"40px"},"& .MuiInputLabel-root":{color:"dark"===A&&"#b2abab"},"& .MuiInputLabel-root.Mui-focused":{color:"light"===A?"#54ADFF":"#183a3d"},"& .MuiOutlinedInput-root":{"& fieldset":{borderRadius:40,border:"1px solid ".concat("light"===A?"#54ADFF":"#2f5a5f")},"&:hover fieldset":{borderColor:"".concat("light"===A?"#54ADFF":"#d9d2d2")},"&.Mui-focused fieldset":{borderColor:"".concat("light"===A?"#54ADFF":"#2f5a5f"),borderWidth:"2px"},"& .MuiInputBase-input":{color:"dark"===A&&"#d9d2d2"}}},onChange:s,value:r.email,error:a.email&&Boolean(t.email),helperText:a.email&&t.email})}),(0,v.jsx)(b.Z,{sx:{marginBottom:"10px",display:"flex",alignItems:"flex-end"},children:(0,v.jsx)(g.Z,{name:"password",type:o?"text":"password",label:C("Password"),size:"small",fullWidth:!0,sx:{"& .MuiInputLabel-root":{color:"dark"===A&&"#b2abab"},"& .MuiInputLabel-root.Mui-focused":{color:"light"===A?"#54ADFF":"#183a3d"},"& .MuiOutlinedInput-root":{"& fieldset":{borderRadius:40,border:"1px solid ".concat("light"===A?"#54ADFF":"#2f5a5f")},"&:hover fieldset":{borderColor:"".concat("light"===A?"#54ADFF":"#d9d2d2")},"&.Mui-focused fieldset":{borderColor:"".concat("light"===A?"#54ADFF":"#2f5a5f"),borderWidth:"2px"},"& .MuiInputBase-input":{color:"dark"===A&&"#d9d2d2"}}},InputProps:{endAdornment:(0,v.jsx)(F.Z,{"aria-label":"toggle password visibility",onClick:P,edge:"end",size:"small",children:o?(0,v.jsx)(_.Z,{style:{color:"dark"===A?"#2f5a5f":Z.Z[300]}}):(0,v.jsx)(w.Z,{style:{color:"dark"===A?"#2f5a5f":Z.Z[300]}})})},onChange:s,value:r.password,error:a.password&&Boolean(t.password),helperText:a.password&&t.password})}),(0,v.jsx)(b.Z,{sx:{marginBottom:"10px",display:"flex",alignItems:"flex-end"},children:(0,v.jsx)(g.Z,{name:"confirmPassword",type:h?"text":"password",label:C("Confirm password"),size:"small",fullWidth:!0,sx:{"& .MuiInputLabel-root":{color:"dark"===A&&"#b2abab"},"& .MuiInputLabel-root.Mui-focused":{color:"light"===A?"#54ADFF":"#183a3d"},"& .MuiOutlinedInput-root":{"& fieldset":{borderRadius:40,border:"1px solid ".concat("light"===A?"#54ADFF":"#2f5a5f")},"&:hover fieldset":{borderColor:"".concat("light"===A?"#54ADFF":"#2f5a5f")},"&.Mui-focused fieldset":{borderColor:"".concat("light"===A?"#54ADFF":"#2f5a5f"),borderWidth:"2px"},"& .MuiInputBase-input":{color:"dark"===A&&"#d9d2d2"}}},InputProps:{endAdornment:(0,v.jsx)(F.Z,{"aria-label":"toggle password visibility",onClick:z,edge:"end",size:"small",children:h?(0,v.jsx)(_.Z,{style:{color:"dark"===A?"#2f5a5f":Z.Z[300]}}):(0,v.jsx)(w.Z,{style:{color:"dark"===A?"#2f5a5f":Z.Z[300]}})})},onChange:s,value:r.confirmPassword,error:a.confirmPassword&&Boolean(t.confirmPassword),helperText:a.confirmPassword&&t.confirmPassword})}),(0,v.jsx)("div",{className:M.buttonContainer,children:(0,v.jsx)("button",{type:"submit",className:M.button,children:C("Registration")})}),(0,v.jsxs)("p",{className:M.questionText,children:[C("Already have an account?")," ",(0,v.jsx)(f.rU,{to:"/login",className:M.loginLink,children:C("Login")})]})]})}})})})},A=function(){var e=(0,i.v9)(s.xU);return(0,v.jsxs)(v.Fragment,{children:[e&&(0,v.jsx)(n.Z,{}),(0,v.jsx)(k,{})]})},C={sectionMain:"RegisterPage_sectionMain__CMxya","my\u0421omponent":"RegisterPage_my\u0421omponent__WYYX-",dark:"RegisterPage_dark__6Y95v"},D=function(){var e=(0,t.useContext)(a.N).theme;return(0,v.jsx)("div",{className:"".concat(C["my\u0421omponent"]," ").concat("light"===e?C.light:C.dark),children:(0,v.jsx)("section",{className:C.sectionMain,children:(0,v.jsx)("div",{className:"container",children:(0,v.jsx)(A,{})})})})}}}]);
//# sourceMappingURL=339.ae4399c4.chunk.js.map