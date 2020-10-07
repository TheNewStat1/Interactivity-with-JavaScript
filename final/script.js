function billingFunction() {
	if (document.getElementById('same').checked) {
		var ship_name = document.getElementById('shippingName').value;
		var ship_zip = document.getElementById('shippingZip').value;
		
		document.getElementById('billingName').value = ship_name;
		document.getElementById('billingZip').value = ship_zip;
		
		}
	else if (document.getElementById('same').checked === false) {
		document.getElementById('billingName').value = '';
		document.getElementById('billingZip').value = '';
		}
	};

