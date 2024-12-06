let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productName, price) {
    cart.push({ productName, price });
    localStorage.setItem('cart', JSON.stringify(cart)); // حفظ السلة في Local Storage
    
    
    
        const notification = document.createElement('div');
        notification.textContent = `${productName} تم إضافته إلى السلة!`;
        notification.style.position = 'fixed';
        notification.style.bottom = '20px';
        notification.style.left = '20px';
        notification.style.backgroundColor = '#28a745'; // لون الإشعار
        notification.style.color = '#fff';
        notification.style.padding = '10px';
        notification.style.borderRadius = '5px';
        notification.style.zIndex = '1000'; // تأكد من ظهور الإشعار فوق العناصر الأخرى
    
        document.body.appendChild(notification);
    
        // إخفاء الإشعار بعد 3 ثوانٍ
        setTimeout(() => {
            notification.remove();
        }, 3000);

    }

function sendOrder() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    if (!name || !phone) {
        alert('الرجاء ملء جميع الحقول.');
        return;
    }

    let total = 0;
    let message = `طلب جديد من ${name} (${phone}):\n`;
    cart.forEach(item => {
        message += `${item.productName} - ${item.price} ريال\n`;
        total += item.price;
    });

    message += `\nالمجموع: ${total} ريال`;

    const whatsappUrl = `https://wa.me/96778073?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}