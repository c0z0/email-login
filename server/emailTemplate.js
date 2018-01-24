module.exports = ({
	link,
	secret
}) => `<div class="root" style="font-family:Lato, sans-serif !important;padding-top:64px;padding-bottom:64px;padding-right:64px;padding-left:64px;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;color:#fff;" >

<div class="card" style="margin-top:0;margin-bottom:0;margin-right:auto;margin-left:auto;box-shadow:2px 2px 30px -8px rgba(0, 0, 0, 0.2);background-color:black;background-image:none;background-repeat:repeat;background-position:top left;background-attachment:scroll;width:512px;overflow:hidden;border-radius:6px;padding-top:32px;padding-bottom:32px;padding-right:32px;padding-left:32px;" >
<h2 class="title" style="color:#ff0080;padding-top:16px;padding-bottom:64px;padding-right:16px;padding-left:24px;text-align:center;font-weight:normal;" >Verify your email to login</h2>
	<p>Hello,</p>
	<p>
	We have received a login attempt with the following code:</p>
	<div class="code" style="background-color:#222;background-image:none;background-repeat:repeat;background-position:top left;background-attachment:scroll;color:#ff0080;padding-top:16px;padding-bottom:16px;padding-right:16px;padding-left:16px;text-align:center;font-weight:bold;font-size:1.1em;" >
		${secret}
	</div>
	<p>
		To complete the login process, please click the button below:
	</p>
	<a href="${link}" class="button" style="color:white !important;text-decoration:none;display:block;text-align:center;background-color:#ff0080;background-image:none;background-repeat:repeat;background-position:top left;background-attachment:scroll;padding-top:16px;padding-bottom:16px;padding-right:16px;padding-left:16px;border-radius:6px;margin-top:0;margin-bottom:0;margin-right:128px;margin-left:128px;" >Verify</a>
	<p>Or copy and paste this URL into your browser:</p>
	<a href="${link}" style="color:#ff0080 !important;" >${link}</a>
	</div>
</div>`
