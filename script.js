const myCarousel = document.querySelector('#testimonialCarousel');
    const carousel = new bootstrap.Carousel(myCarousel, {
      interval: 5000,
      ride: 'carousel',
      pause: false
    });

    const locations = [
      { name: "Whitefield", hot: true, desc: "IT hub with rising demand and metro access." },
      { name: "Marathahalli", hot: true, desc: "Affordable housing with great connectivity." },
      { name: "Electronic City", hot: true, desc: "Home to major tech companies and gated communities." },
      { name: "Hebbal", hot: false, desc: "Lake views, flyovers, and ORR access." },
      { name: "Koramangala", hot: true, desc: "Trendy, young crowd, startup ecosystem." },
      { name: "Indiranagar", hot: true, desc: "Luxury real estate with cafes and nightlife." },
      { name: "Rajaji Nagar", hot: false, desc: "Well-established area with old Bangalore charm." },
      { name: "Bannerghatta Road", hot: false, desc: "Proximity to IIM, hospitals, and green spaces." },
      { name: "Jayanagar", hot: false, desc: "Family-friendly with parks and schools." },
      { name: "HSR Layout", hot: true, desc: "Fast-growing, ideal for families and techies." },
      { name: "BTM Layout", hot: false, desc: "Budget homes and good rental returns." },
      { name: "Yelahanka", hot: false, desc: "Quiet zone with rapid infrastructure growth." },
      { name: "MG Road", hot: true, desc: "Central business district with commercial real estate." },
      { name: "Banashankari", hot: false, desc: "Well-planned with educational institutions." },
      { name: "Basavanagudi", hot: false, desc: "Cultural heritage and calm living." },
      { name: "Bellandur", hot: true, desc: "Close to Outer Ring Road and IT parks." },
      { name: "Kengeri", hot: false, desc: "Upcoming location with metro access." },
      { name: "Sarjapur Road", hot: true, desc: "Hot investment zone with rapid growth." },
      { name: "Malleshwaram", hot: false, desc: "Historic, green, and peaceful neighborhood." },
      { name: "Ulsoor", hot: false, desc: "Central location near lakes and metro." }
    ];

    const container = document.getElementById("locationContainer");

    function renderLocations(filter = "") {
      container.innerHTML = "";

      locations
        .filter(loc => loc.name.toLowerCase().includes(filter.toLowerCase()))
        .forEach((loc, index) => {
          const col = document.createElement("div");
          col.className = "col-md-6 col-lg-4 mb-4";

          col.innerHTML = `
        <div class="location-card bg-white p-3 rounded shadow-sm h-100" data-index="${index}">
          <div class="d-flex align-items-start">
            <i class="fa-solid fa-map-location-dot text-primary fs-4 me-3 mt-1"></i>
            <div>
              <h6 class="mb-1 fw-semibold">
                ${loc.name}
                ${loc.hot ? '<span class="badge badge-hot">Hot</span>' : ""}
              </h6>
              <p class="mb-0 text-muted small">Click to learn more</p>
              <p class="location-desc">${loc.desc}</p>
            </div>
          </div>
        </div>
      `;

          // Click listener to toggle expansion
          const card = col.querySelector(".location-card");
          card.addEventListener("click", function () {
            // Collapse all other cards
            document.querySelectorAll(".location-card.expanded").forEach(other => {
              if (other !== card) {
                other.classList.remove("expanded");
              }
            });

            // Toggle the clicked card
            card.classList.toggle("expanded");
          });

          container.appendChild(col);
        });
    }

    // Search filtering
    document.getElementById("searchInput").addEventListener("input", (e) => {
      renderLocations(e.target.value);
    });

    // Initial render
    renderLocations();