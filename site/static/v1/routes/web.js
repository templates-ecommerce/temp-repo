var subdomain = SubDomain;
var siteid = SiteID;
var apicon = typeof host == 'undefined' ? 'https://api.eraconnect.net' : host;

window.addEventListener('storage', async () => {
    // When local storage changes, dump the list to
    // the console.
    onlodergetusersids()
    try {
        if (pagenames == "checkout") {
            load()
        }
        if (pagenames == "Cartpage") {
            cardpage()
        }


    } catch (error) {
        
    }
  });

function getusersids() {
    onlodergetusersids()
    
}
$(document).ready(function () {
    
    try {
        getusersids()
        
    } catch (error) {

    }
    try {
        sliderheroactive()
    } catch (error) {

    }
    // config file success load start
    try {

        $.ajax({
            url: Encryptionsuccess(),
            success: function () {
                whatsappcheck()
                checkoutsloadallows(AccessKey, subdomain);
                invoiceonloader();
                dashboardonloader();
                
                Cartpage();
                verifycuser()
                
                // track();
            }
        })
    }
    catch (error) {

    }
    // config file success load end
    try {
        $('#titlesnameallow').text(capitalizeFirstLetter(company_name)+' | '+capitalizeFirstLetter(decodeURIComponent($('#titlesnameallow').text()).replaceAll('+',' ')))
        //$('#titlesnameallow').text(capitalizeFirstLetter(pagenames))
    } catch (error) {
        
    }



});
var AccessKey;

// config files allow start
function Encryptionsuccess() {
    AccessKey = Encryption(siteid, subdomain);
}
// config files allow end

// Create token encryption start

function Encryption(number, subdomain) {
    var key = CryptoJS.enc.Utf8.parse(subdomain.padStart(32, 'e'));
    var iv = CryptoJS.enc.Utf8.parse("F)a(rQ/HEp9E`2bk");
    var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(number), key,
        {
            keySize: 128 / 4,
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
    return encrypted.toString();
}
// Create token encryption end


// verify start
function verifycuser()
{
    try {
        if (pagenames == "Home") {
        verfyaccountdone()
        }
    } catch (error) {
        
    }
}
// verify end


// Checkout onloader start
function checkoutsloadallows(acckey, domain) {
    try {
        if (pagenames == "checkout") {

            ouuid = generateUUID();


            console.log(ouuid);

            callcity(acckey, domain)

            load()
        }
    } catch (error) {

    }

}
// Checkout onloader End


// Invoice function start
function invoiceonloader() {
    try {
        if (pagenames == "invoice") {
            onloaderinvoice()
        }
    } catch (error) {

    }
}
// Invoice function end



// Dashboard function start
function dashboardonloader() {
    try {
        if (pagenames == "dashboard") {
            onloaderdashboard()
        }
    } catch (error) {

    }
}
// Dashboard function end

// tracking function start
function track() {
    try {
        if (pagenames == "track") {
            onloadertrack()
        }
    } catch (error) {

    }

}
// tracking function end


// Cart function start
function Cartpage() {
    try {
        if (pagenames == "Cartpage") {
            cardpage()
        }
    } catch (error) {

    }

}
// Cart function end


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.toLowerCase().slice(1);
}



function enforce_maxlength(event) {
    var t = event.target;
    if (t.hasAttribute('maxlength')) {
      t.value = t.value.slice(0, t.getAttribute('maxlength'));
    }
  }
  
  // Global Listener for anything with an maxlength attribute.
  // I put the listener on the body, put it on whatever.
  document.body.addEventListener('input', enforce_maxlength);

  
  function whatsappcheck()
  {
      if(social_mobile==null)
      $('.whatsappcheck').hide();
      else if(social_mobile=="")
      $('.whatsappcheck').hide();
  }

  function whatsapp(id,name)
{
  $('#whatsapp'+id).attr('href','https://api.whatsapp.com/send/?phone='+social_mobile+'&text='+window.location.origin+'/products/'+id+'%0D%0AProduct Name: *'+name+'*%0D%0ACould you please tell me the availibilty of this product?');
}

$('#ec-sliderPrice').on('click touchstart',function(){
    checkbox()
})