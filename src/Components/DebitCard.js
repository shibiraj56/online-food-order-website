import React from "react";

function DebitCard() {
  return (
    <div className="cardGroup">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2FVisaLogo.png?alt=media&token=d6cac80d-a066-4388-97c2-9a57acfe4266"
        alt=""
        className="cardLogo"
      />

      <img
        src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fchip.png?alt=media&token=401162f6-2dd2-4da4-bef7-6479c132789c"
        alt=""
        className="cardChip"
      />

      <div className="card_number">9112 0020 1082 0067</div>
      <div className="card_name">SHIBI RAJ S</div>
      <div className="card_from">11/22</div>
      <div className="card_to">12/30</div>
      <div className="card_ring"></div>
    </div>
  );
}

export default DebitCard;