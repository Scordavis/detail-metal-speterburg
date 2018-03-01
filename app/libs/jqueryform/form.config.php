<?php namespace JF;
/**

Copyright 2018 JQueryForm.com
License: http://www.jqueryform.com/license.php

FormID:  jqueryform-23c663
Date:    2018-02-24 01:48:37
Version: v2.1.0
Generated by http://www.jqueryform.com

PHP 5.3+ is required.
If mailgun is used AND the form has file upload field, PHP 5.5+ is required.

*/

class Config {
	private static $config;

    public static function getConfig( $decode = true ){
    	self::$config = self::_getConfig( $decode );
    	self::overwriteConfig();
    	return self::$config;
    }

    private static function _getConfig( $decode = true ){
        ob_start();
        // ---------------------------------------------------------------------
        // JSON format config
        // Note: please make a copy before you edit config manually
        // ---------------------------------------------------------------------

/**JSON_START**/ ?>
{
    "formId": "jqueryform-23c663",
    "email": {
        "to": "scordavis@gmail.com",
        "cc": "",
        "bcc": "",
        "subject": "\u041f\u0440\u043e\u043c\u041b\u0438\u043d\u043a \u0444\u043e\u0440\u043c\u0430 \u0441 \u043f\u0440\u0438\u043a\u0440\u0435\u043f\u043b\u0435\u043d\u0438\u0435\u043c",
        "template": ""
    },
    "admin": {
        "users": "admin:e2f5f",
        "dataDelivery": "emailAndFile"
    },
    "thankyou": {
        "url": "",
        "message": "\u0424\u043e\u0440\u043c\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0430",
        "seconds": "10"
    },
    "autoResponse": {
        "includeAttachments": true,
        "subject": "",
        "template": ""
    },
    "seo": {
        "trackerId": "",
        "title": "",
        "description": "",
        "keywords": "",
        "author": ""
    },
    "mailer": "local",
    "smtp": {
        "host": "",
        "user": "",
        "password": ""
    },
    "mailgun": {
        "domain": "",
        "apiKey": "",
        "fromEmail": "",
        "fromName": ""
    },
    "styles": {
        "iCheck": {
            "enabled": false,
            "skin": "flat",
            "colorScheme": "black"
        },
        "Select2": {
            "enabled": false
        }
    },
    "logics": [

    ],
    "fields": [
        {
            "label": "Your Name",
            "field_type": "name",
            "field_options": {
                "size": "small",
                "sender": "firstname",
                "images": {
                    "urls": "",
                    "slideshow": false,
                    "responsive": false
                },
                "validators": {
                    "required": {
                        "enabled": false
                    }
                },
                "placeholder": "\u0412\u0430\u0448\u0435 \u0438\u043c\u044f",
                "addon": {
                    "leftIcon": ""
                }
            },
            "id": "f1",
            "cid": "c1",
            "labelHide": true
        },
        {
            "label": "\u0422\u0435\u043b\u0435\u0444\u043e\u043d",
            "field_type": "phone",
            "required": true,
            "field_options": {
                "images": {
                    "urls": "",
                    "style": [

                    ],
                    "slideshow": false
                },
                "sender": false,
                "placeholder": "\u0422\u0435\u043b\u0435\u0444\u043e\u043d",
                "addon": {
                    "leftIcon": ""
                },
                "validators": {
                    "pattern": {
                        "enabled": true,
                        "val": "[+]*[0-9]{1}[ -.]*[0-9]{3}[ -.]*[0-9]{3}[ -.]*[0-9]{2}[ -.]*[0-9]{2}",
                        "msg": "\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442"
                    },
                    "required": {
                        "enabled": true
                    },
                    "phonenumber": {
                        "enabled": false
                    },
                    "minlength": {
                        "enabled": false,
                        "val": "12"
                    },
                    "maxlength": {
                        "enabled": false,
                        "val": ""
                    }
                },
                "mask": {
                    "pattern": "+7(000)000-00-00"
                }
            },
            "phone": {
                "validationMethod": "simple",
                "simpleFormat": "xxx-xxx-xxxx",
                "usePhoneLib": "Y",
                "preferredCountries": "ru",
                "onlyCountries": "ru"
            },
            "id": "f4",
            "cid": "c27",
            "labelHide": true
        },
        {
            "label": "Upload File",
            "field_type": "file",
            "required": true,
            "field_options": {
                "images": {
                    "urls": "",
                    "style": [

                    ],
                    "slideshow": false
                },
                "file": {
                    "showPreview": true,
                    "showRemove": true,
                    "browseLabel": "\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u0430\u0439\u043b(\u044b)",
                    "allowedFileExtensions": "docx,xlsx,pptx,doc,xls,ppt,rtf,pdf",
                    "maxFileCount": "4",
                    "maxFileSize": "10000"
                },
                "multiple": true
            },
            "id": "f5",
            "cid": "c32",
            "labelHide": true
        },
        {
            "label": "Comments",
            "field_type": "paragraph",
            "field_options": {
                "images": {
                    "urls": "",
                    "slideshow": false
                },
                "validators": {
                    "required": {
                        "enabled": false
                    }
                },
                "addon": {
                    "leftIcon": ""
                },
                "placeholder": "\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439"
            },
            "id": "f3",
            "cid": "c3",
            "labelHide": true
        },
        {
            "label": "Submit Button",
            "field_type": "submit",
            "required": true,
            "field_options": {
                "page": {
                    "title": "Submit",
                    "labelPrev": "< Back",
                    "showPageNumnber": false,
                    "pageNumberText": "{page} \/ {total}"
                },
                "images": {
                    "urls": "",
                    "slideshow": false
                }
            },
            "labelHide": true,
            "submit": {
                "label": "\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c",
                "icon": "",
                "checkRequiredFields": "\u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"
            },
            "id": "f0",
            "cid": "c0"
        }
    ],
    "licenseKey": ""
}
<?php /**JSON_END**/

        $json = ob_get_clean() ;

        return $decode ? json_decode( trim($json), true ) : $json;
    } // end of getConfig()

    private static function getValue( $fieldId, $default = NULL ){
        return isset( $_POST[$fieldId] ) ? $_POST[$fieldId] : $default ;
    }

    private static function overwriteConfig(){
    	//self::get_to();
    }

    private static function get_to(){
    	$value = self::getValue( 'c25' );
    	$to = array(
    		'Option 1' => 'a@a.com',
    		'Option 2' => 'b@b.com',
    		'Option 3' => 'c@c.com',
    	);

    	if( isset( $to[$value] ) ){
    		self::$config['email']['to'] = $to[ $value ];
    	};
    }

} // end of Config class