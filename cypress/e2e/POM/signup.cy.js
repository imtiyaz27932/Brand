class signup {
   elements = {
      emailaddresstextfield: () => cy.get('#email'),
      signupfield: () => cy.get('button[type=submit]'),
      firstnamefield: () => cy.get('#firstName'),
      lastname: () => cy.get('#lastName'),
      companyName: () => cy.get('#company'),
      title: () => cy.get('#jobTitle'),
      phonenumber: () => cy.get('#phoneNumber'),
      setpassword: () => cy.get('button[type=submit]'),
      //   Otp1:()=> cy.get('[aria-label="Please enter OTP character 1"]'),
      //   Otp2:()=> cy.get('[aria-label="Please enter OTP character 2"]'),
      //   Otp3:()=> cy.get('[aria-label="Please enter OTP character 3"]'),
      //   Otp4:()=> cy.get('[aria-label="Please enter OTP character 4"]'),
      //   verifyotpbtn:()=> cy.get('.ant-btn'),
      passwordtxtfield: () => cy.get('#password'),
      confirmpasswordtxtfield: () => cy.get('#confirm_password'),
      createaccountbtn: () => cy.get('.ant-btn'),
      signupfb: () => cy.get('.ant-btn css-dev-only-do-not-override-i9o64j ant-btn-round ant-btn-primary ant-btn-block mt-4 flex justify-center items-center'),
      fbemail: () => cy.get('#email'),
      fbpassword: () => cy.get('#pass'),
      fbloginbtn: () => cy.get('#u_0_0_Ed')

   }

   errormessage = {    //validation message 
      validemailaddress: () => cy.get('.ant-form-item-explain-error').should('have.text', 'Enter valid email'),
      //useralreadyregistered:()=> cy.get('.go946087465').should('have.text','User is already registered')
   }

   enteremailaddress(email)   // enter the email address
   {
      this.elements.emailaddresstextfield().type(email)
   }

   verifysignupfield()    //clicks on verify email address field
   {
      this.elements.signupfield().click()
   }

   Sigupwithouteamiladdress()                  //give a validation message if field is empty
   {

      this.elements.emailaddresstextfield().type(' ')
      this.elements.signupfield().click()
      this.errormessage.validemailaddress()

   }


   Sigupwitheamiladdress(email) {

      this.elements.emailaddresstextfield().type(email)
      this.elements.signupfield().click()

   }
   usercredentialssignup(firstname, lastname, cname, Title, phno) {
      this.elements.firstnamefield().type(firstname)
      this.elements.lastname().type(lastname)
      this.elements.companyName().type(cname)
      this.elements.title().type(Title)
      this.elements.phonenumber().type(phno)
      this.elements.setpassword().click()


   }

   //   enterotp()
   //   {
   //      this.elements.Otp1().type('1')
   //      this.elements.Otp2().type('0')
   //      this.elements.Otp3().type('8')
   //      this.elements.Otp4().type('9')
   //      this.elements.verifyotpbtn().click()
   //}

   enterpassword(password, confirmpassword) {
      this.elements.passwordtxtfield().type(password)
      this.elements.confirmpasswordtxtfield().type(confirmpassword)
      this.elements.createaccountbtn().click()

   }

   signupWithFB() {
      //this.elements.signupfb().click();
      cy.get('[class="aut-iframe"]').then($iframe => {
      const $body = $iframe.contents().find('body');
      cy.wrap($body)
        .find('Signup with facebook').click()
      cy.wait(4000)
      })
      //cy.contains('[type="button"]',"Signin with facebook").click()
      cy.wait(6000);
      cy.window().then((win) => {
         cy.stub(win, 'open', url => {
            win.location.href = 'https://www.facebook.com/login.php?skip_api_login=1&api_key=1304253917158272&kid_directed_site=0&app_id=1304253917158272&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv2.7%2Fdialog%2Foauth%3Fapp_id%3D1304253917158272%26auth_type%26cbt%3D1684921468019%26channel_url%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fx%252Fconnect%252Fxd_arbiter%252F%253Fversion%253D46%2523cb%253Df393e39743c7d4%2526domain%253Dapp.influnaire.dreamkashmir.com%2526is_canvas%253Dfalse%2526origin%253Dhttps%25253A%25252F%25252Fapp.influnaire.dreamkashmir.com%25252Ff27d73d5edf52c4%2526relation%253Dopener%26client_id%3D1304253917158272%26display%3Dpopup%26domain%3Dapp.influnaire.dreamkashmir.com%26e2e%3D%257B%257D%26fallback_redirect_uri%3Dhttps%253A%252F%252Fapp.influnaire.dreamkashmir.com%252Finfluencer%252Fregister%26locale%3Den_US%26logger_id%3Df223fd3921df18c%26origin%3D1%26redirect_uri%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fx%252Fconnect%252Fxd_arbiter%252F%253Fversion%253D46%2523cb%253Dfb8b6104b94cdc%2526domain%253Dapp.influnaire.dreamkashmir.com%2526is_canvas%253Dfalse%2526origin%253Dhttps%25253A%25252F%25252Fapp.influnaire.dreamkashmir.com%25252Ff27d73d5edf52c4%2526relation%253Dopener%2526frame%253Dfd92edc57c398%26response_type%3Dtoken%252Csigned_request%252Cgraph_domain%26return_scopes%3Dtrue%26scope%3Dpublic_profile%252Cemail%26sdk%3Djoey%26version%3Dv2.7%26ret%3Dlogin%26fbapp_pres%3D0%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Dfb8b6104b94cdc%26domain%3Dapp.influnaire.dreamkashmir.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fapp.influnaire.dreamkashmir.com%252Ff27d73d5edf52c4%26relation%3Dopener%26frame%3Dfd92edc57c398%26error%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied&display=popup&locale=en_GB&pl_dbl=0';
         }).as("popup")
      })
      cy.get('button').click()
      cy.get('@popup')
         .should("be.called")
   }

}


export default signup