import React from "react";

interface BookingForm {
  name: string;
  email: string;
  phone: string;
  guests: string;
  date: string;
  time: string;
  requests: string;
}

interface BookingErrors {
  name?: string;
  email?: string;
  phone?: string;
  guests?: string;
  date?: string;
  time?: string;
}

interface BookingModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
  resSubmitState: "idle" | "processing" | "success";
  bookingForm: BookingForm;
  bookingErrors: BookingErrors;
  bookingGeneralError: string | null;
  handleReservationSubmit: (e: React.FormEvent) => void;
  handleBookingChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  nameInputRef: React.RefObject<HTMLInputElement>;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isModalOpen,
  setIsModalOpen,
  resSubmitState,
  bookingForm,
  bookingErrors,
  bookingGeneralError,
  handleReservationSubmit,
  handleBookingChange,
  nameInputRef,
}) => {
  return (
    <div
      className={`modal-overlay ${isModalOpen ? "active" : ""}`}
      id="reservationModal"
      onClick={(e) => {
        if (e.target === e.currentTarget) setIsModalOpen(false);
      }}
      aria-modal="true"
      role="dialog"
      aria-labelledby="booking-modal-head-title"
    >
      <div className="modal-content" id="reservationModalContent">
        <div className="modal-top-accent"></div>
        <button
          className="modal-close-glass"
          onClick={() => setIsModalOpen(false)}
          aria-label="Close reservation modal"
          id="close-booking-modal"
        >
          <i className="fa-solid fa-xmark" aria-hidden="true"></i>
        </button>

        {resSubmitState === "success" ? (
          <div className="booking-success-view" id="booking-success-view-container">
            <div className="success-icon-wrapper">
              <svg
                className="checkmark"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 52 52"
                aria-hidden="true"
              >
                <circle
                  className="checkmark-circle"
                  cx="26"
                  cy="26"
                  r="25"
                  fill="none"
                />
                <path
                  className="checkmark-check"
                  fill="none"
                  d="M14.1 27.2l7.1 7.2 16.7-16.8"
                />
              </svg>
            </div>
            <h3 className="success-title" id="booking-success-heading">Your Table Has Been Reserved!</h3>
            <p className="success-subtitle">
              Your royal table is successfully secured.
            </p>

            <div className="reservation-summary-card">
              <h4 className="summary-title">RESERVATION SUMMARY</h4>
              <div className="summary-row">
                <span className="summary-label">GUEST NAME</span>
                <span className="summary-val">{bookingForm.name}</span>
              </div>
              <div className="summary-row">
                <span className="summary-label">DATE & TIME</span>
                <span className="summary-val">
                  {bookingForm.date} at {bookingForm.time}
                </span>
              </div>
              <div className="summary-row">
                <span className="summary-label">PARTY SIZE</span>
                <span className="summary-val">
                  {bookingForm.guests === "7+"
                    ? "7+ People"
                    : `${bookingForm.guests} ${bookingForm.guests === "1" ? "Person" : "People"}`}
                </span>
              </div>
              <div className="summary-row border-none">
                <span className="summary-label">STATUS</span>
                <span className="summary-val val-status">
                  <span className="status-dot"></span> CONFIRMED
                </span>
              </div>
            </div>

            <p className="success-footer-text">
              A confirmation email has been dispatched to{" "}
              <strong>{bookingForm.email}</strong>. We look forward to
              welcoming you.
            </p>
          </div>
        ) : (
          <>
            <div className="subtitle-wrapper">
              <span className="line"></span>
              <p className="subtitle">Reservation</p>
              <span className="line"></span>
            </div>
            <h3 className="modal-title" id="booking-modal-head-title">Book Your Table</h3>
            <p className="modal-subtitle">
              Reserve your dining experience at Royal Haveli. Please fill out details below to secure your fine dining table.
            </p>

            <form
              onSubmit={handleReservationSubmit}
              className="booking-form-grid"
              noValidate
              id="booking-form-element"
            >
              {/* Full Name */}
              <div className="form-group form-group-full">
                <label className="form-group-label" htmlFor="b-name">
                  Full Name <span className="req-star">*</span>
                </label>
                <div
                  className={`input-icon-group ${bookingErrors.name ? "has-error" : ""}`}
                >
                  <input
                    type="text"
                    id="b-name"
                    ref={nameInputRef}
                    value={bookingForm.name}
                    onChange={handleBookingChange}
                    placeholder="e.g. John Doe"
                    required
                  />
                  <i className="fa-solid fa-user" aria-hidden="true"></i>
                </div>
                {bookingErrors.name && (
                  <span className="inline-error" id="error-b-name">{bookingErrors.name}</span>
                )}
              </div>

              {/* Email Address */}
              <div className="form-group">
                <label className="form-group-label" htmlFor="b-email">
                  Email Address <span className="req-star">*</span>
                </label>
                <div
                  className={`input-icon-group ${bookingErrors.email ? "has-error" : ""}`}
                >
                  <input
                    type="email"
                    id="b-email"
                    value={bookingForm.email}
                    onChange={handleBookingChange}
                    placeholder="e.g. john@example.com"
                    required
                  />
                  <i className="fa-solid fa-envelope" aria-hidden="true"></i>
                </div>
                {bookingErrors.email && (
                  <span className="inline-error" id="error-b-email">{bookingErrors.email}</span>
                )}
              </div>

              {/* Phone Number */}
              <div className="form-group">
                <label className="form-group-label" htmlFor="b-phone">
                  Phone Number <span className="req-star">*</span>
                </label>
                <div
                  className={`input-icon-group ${bookingErrors.phone ? "has-error" : ""}`}
                >
                  <input
                    type="tel"
                    id="b-phone"
                    value={bookingForm.phone}
                    onChange={handleBookingChange}
                    placeholder="e.g. (408) 889-6001"
                    required
                  />
                  <i className="fa-solid fa-phone" aria-hidden="true"></i>
                </div>
                {bookingErrors.phone && (
                  <span className="inline-error" id="error-b-phone">{bookingErrors.phone}</span>
                )}
              </div>

              {/* Number of Guests */}
              <div className="form-group">
                <label className="form-group-label" htmlFor="b-guests">
                  Number of Guests <span className="req-star">*</span>
                </label>
                <div
                  className={`input-icon-group ${bookingErrors.guests ? "has-error" : ""}`}
                >
                  <select
                    id="b-guests"
                    value={bookingForm.guests}
                    onChange={handleBookingChange}
                    required
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                    <option value="5">5 People</option>
                    <option value="6">6 People</option>
                    <option value="7+">7+ People</option>
                  </select>
                  <i className="fa-solid fa-users" aria-hidden="true"></i>
                </div>
                {bookingErrors.guests && (
                  <span className="inline-error" id="error-b-guests">{bookingErrors.guests}</span>
                )}
              </div>

              {/* Date Picker */}
              <div className="form-group">
                <label className="form-group-label" htmlFor="b-date">
                  Preferred Date <span className="req-star">*</span>
                </label>
                <div
                  className={`input-icon-group ${bookingErrors.date ? "has-error" : ""}`}
                >
                  <input
                    type="date"
                    id="b-date"
                    value={bookingForm.date}
                    onChange={handleBookingChange}
                    required
                  />
                  <i className="fa-solid fa-calendar-days" aria-hidden="true"></i>
                </div>
                {bookingErrors.date && (
                  <span className="inline-error" id="error-b-date">{bookingErrors.date}</span>
                )}
              </div>

              {/* Preferred Time */}
              <div className="form-group form-group-full">
                <label className="form-group-label" htmlFor="b-time">
                  Preferred Time <span className="req-star">*</span>
                </label>
                <div
                  className={`input-icon-group ${bookingErrors.time ? "has-error" : ""}`}
                >
                  <input
                    type="time"
                    id="b-time"
                    value={bookingForm.time}
                    onChange={handleBookingChange}
                    required
                  />
                  <i className="fa-solid fa-clock" aria-hidden="true"></i>
                </div>
                {bookingErrors.time && (
                  <span className="inline-error" id="error-b-time">{bookingErrors.time}</span>
                )}
              </div>

              {/* Special Request */}
              <div className="form-group form-group-full">
                <label className="form-group-label" htmlFor="b-requests">
                  Special Request or Occasion
                </label>
                <div className="input-icon-group textarea-icon-group">
                  <textarea
                    id="b-requests"
                    rows={3}
                    value={bookingForm.requests}
                    onChange={handleBookingChange}
                    placeholder="Any dietary restrictions, anniversaries, or seating preferences..."
                  ></textarea>
                  <i className="fa-solid fa-champagne-glasses" aria-hidden="true"></i>
                </div>
              </div>

              {/* General Submission Error */}
              {bookingGeneralError && (
                <div
                  className="form-group-full text-center"
                  style={{
                    color: "#d48a37",
                    fontSize: "0.85rem",
                    marginTop: "10px",
                    marginBottom: "10px",
                    fontFamily: "'Poppins', sans-serif",
                    width: "100%",
                    gridColumn: "span 2"
                  }}
                  id="booking-general-error-message"
                >
                  <i className="fa-solid fa-circle-exclamation" style={{ marginRight: "6px" }} aria-hidden="true"></i>
                  {bookingGeneralError}
                </div>
              )}

              {/* Submit Button */}
              <div className="form-group-full" style={{ marginTop: "15px" }}>
                <button
                  type="submit"
                  className="btn-gradient btn-reserve-submit"
                  disabled={resSubmitState === "processing"}
                  aria-label="Submit table reservation details"
                >
                  {resSubmitState === "idle" && (
                    <>
                      <span>Reserve My Table</span>
                      <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                    </>
                  )}
                  {resSubmitState === "processing" && (
                    <>
                      <i className="fa-solid fa-spinner fa-spin" aria-hidden="true"></i>
                      <span>Securing Table...</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
