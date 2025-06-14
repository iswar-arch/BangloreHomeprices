 async function onPageLoad() {
      const locationDropdown = document.getElementById("location");
      const response = await fetch("http://127.0.0.1:5000/get_location_names");
      const data = await response.json();
      locationDropdown.innerHTML = "";

      data.locations.forEach(loc => {
        let option = document.createElement("option");
        option.value = loc;
        option.textContent = loc;
        locationDropdown.appendChild(option);
      });
    }

    async function onClickedEstimatePrice() {
      let sqft = document.getElementById("sqft").value;
      let bhk = document.getElementById("bhk").value;
      let bath = document.getElementById("bath").value;
      let location = document.getElementById("location").value;

      let formData = new FormData();
      formData.append("total_sqft", sqft);
      formData.append("bhk", bhk);
      formData.append("bath", bath);
      formData.append("location", location);

      const response = await fetch("http://127.0.0.1:5000/predict_home_price", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      document.getElementById("estimated_price").innerText =
        "Estimated Price: ₹ " + data.estimated_price + " Lakhs";
    }

    window.onload = onPageLoad;