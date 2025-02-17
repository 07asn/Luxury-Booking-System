/**
 *  Controls:
 *    - Booking Details Modal (BookingDetailsModal)
 *    - Guest   Details Modal (GuestDetailsModal)
 */


/*--------------------> IMPORTS <--------------------*/
import React, { useState } from "react";
import BookingDetailsModal from "../modals/BookingDetailsModal";
import GuestDetailsModal from "../modals/GuestDetailsModal";
/*--------------------> IMPORTS <--------------------*/


export default function BookingWizard({ booking, onCloseAll }) {

/*--------------------> STATE & Declaration<--------------------*/
  const [step, setStep] = useState("booking");

  if (!booking) return null;

  const handleBookingForward = () => setStep("guest");
  const handleGuestBack = () => setStep("booking");
  const handleCloseAll = () => onCloseAll?.();

  const guestData = {
    name: booking.fullName || "",
    email: booking.guestEmail || "",
    phone: booking.phoneNumber || "",
    avatar: booking.guestAvatar || ""
  };
/*--------------------> STATE & Declaration<--------------------*/


  return (
    <>
      {step === "booking" && (
        <BookingDetailsModal
          booking={booking}
          onClose={handleCloseAll}
          onForward={handleBookingForward}
        />
      )}
      {step === "guest" && (
        <GuestDetailsModal
          guest={guestData}
          booking={booking}   
          onCloseAll={handleCloseAll}
          onBack={handleGuestBack}
        />
      )}
    </>
  );
}
