localStorage
> presistant Storage
> wrt to browser
> we have to remove manully


localStorage.setItem('tokendata','34643g4r445')
undefined
localStorage.getItem('tokendata')
"34643g4r445"
localStorage.removeItem('tokendata')
undefined
localStorage.getItem('tokendata')
null

sessionStorage
> temp Storage
> save wrt to tab 

sessionStorage.setItem('mycity','Delhi')
undefined
sessionStorage.getItem('mycity')
"Delhi"
sessionStorage.removeItem('mycity')

cookies
> save wrt to website
> expireIn time

document.cookie
"_ga=GA1.2.1880173027.1602255983; _gid=GA1.2.1026688830.1621783043; _gat_gtag_UA_131256843_1=1"

document.cookie="myCookies=test; expires=Tue, 25 May 2021 01:00:00 UTC"
"myCookies=test; expires=Tue, 25 May 2021 01:00:00 UTC"

document.cookie
"_ga=GA1.2.1880173027.1602255983; _gid=GA1.2.1026688830.1621783043; myCookies=test"
