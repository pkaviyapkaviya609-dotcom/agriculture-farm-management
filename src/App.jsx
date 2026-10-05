import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const API = "http://localhost:8081/api";

function App() {

  const [activePage, setActivePage] = useState("Dashboard");

  // =========================================================
  // FARM DATA
  // =========================================================

  const [farms, setFarms] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/farms`)
      .then((response) => {
        setFarms(response.data);
      })
      .catch((error) => {
        console.error("Error fetching farms:", error);
      });
  }, []);


  // =========================================================
  // CROP DATA
  // =========================================================

  const [crops, setCrops] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/crops`)
      .then((response) => {
        setCrops(response.data);
      })
      .catch((error) => {
        console.error("Error fetching crops:", error);
      });
  }, []);


  // =========================================================
  // PLANTING DATA
  // =========================================================

  const [plantings, setPlantings] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/crop-plantings`)
      .then((response) => {
        setPlantings(response.data);
      })
      .catch((error) => {
        console.error("Error fetching crop plantings:", error);
      });
  }, []);


  // =========================================================
  // HARVEST DATA
  // =========================================================

  const [harvests, setHarvests] = useState([]);

  useEffect(() => {
    loadHarvests();
  }, []);

  const loadHarvests = () => {
    axios
      .get(`${API}/harvests`)
      .then((response) => {
        setHarvests(response.data);
      })
      .catch((error) => {
        console.error("Error fetching harvests:", error);
      });
  };


  // =========================================================
  // COMPLETE HARVEST DETAILS
  // =========================================================

  const [harvestDetails, setHarvestDetails] = useState([]);

  useEffect(() => {
    loadHarvestDetails();
  }, []);

  const loadHarvestDetails = () => {
    axios
      .get(`${API}/harvests/details`)
      .then((response) => {
        setHarvestDetails(response.data);
      })
      .catch((error) => {
        console.error("Error fetching harvest details:", error);
      });
  };


  // =========================================================
  // HIGH YIELD CROPS
  // =========================================================

  const [aboveAverage, setAboveAverage] = useState([]);

  useEffect(() => {
    loadAboveAverage();
  }, []);

  const loadAboveAverage = () => {
    axios
      .get(`${API}/harvests/above-average`)
      .then((response) => {
        setAboveAverage(response.data);
      })
      .catch((error) => {
        console.error("Error fetching high yield crops:", error);
      });
  };


  // =========================================================
  // TOTAL HARVEST
  // =========================================================

  const [totalHarvest, setTotalHarvest] = useState(0);

  useEffect(() => {
    loadTotalHarvest();
  }, []);

  const loadTotalHarvest = () => {
    axios
      .get(`${API}/harvests/total`)
      .then((response) => {
        setTotalHarvest(response.data);
      })
      .catch((error) => {
        console.error("Error fetching total harvest:", error);
      });
  };


  // =========================================================
  // REFRESH ALL DATA
  // =========================================================

  const refreshAllData = () => {

    axios
      .get(`${API}/farms`)
      .then((response) => {
        setFarms(response.data);
      });

    axios
      .get(`${API}/crops`)
      .then((response) => {
        setCrops(response.data);
      });

    axios
      .get(`${API}/crop-plantings`)
      .then((response) => {
        setPlantings(response.data);
      });

    axios
      .get(`${API}/harvests`)
      .then((response) => {
        setHarvests(response.data);
      });

    loadHarvestDetails();
    loadAboveAverage();
    loadTotalHarvest();
  };


  // =========================================================
  // DASHBOARD
  // =========================================================

  const Dashboard = () => {

    return (
      <>
        <header className="topbar">

          <div>
            <div className="small-title">
              AGRICULTURE MANAGEMENT
            </div>

            <h1>Dashboard</h1>
          </div>

          <div className="top-actions">

            <span>Spring Boot</span>
            <span>MySQL</span>
            <span>React</span>

            <button
              className="refresh-btn"
              onClick={refreshAllData}
            >
              ↻ Refresh
            </button>

          </div>

        </header>


        <main className="dashboard-content">

          {/* WELCOME CARD */}

          <section className="welcome-card">

            <div className="welcome-text">

              <div className="welcome-small">
                WELCOME BACK
              </div>

              <h2>
                Smart Agriculture
                <br />
                <span>Farm Management System</span>
              </h2>

              <p>
                Manage farms, crops, planting activities and harvest
                records efficiently from one dashboard.
              </p>

              <div className="feature-pills">

                <span>🌱 Farm Management</span>

                <span>🌾 Crop Tracking</span>

                <span>📊 Harvest Monitoring</span>

              </div>

            </div>

            <div className="plant-icon">
              🌱
            </div>

          </section>


          {/* STAT CARDS */}

          <section className="stats-grid">

            <div
              className="stat-card"
              onClick={() => setActivePage("Farms")}
            >

              <div className="stat-top">

                <div className="stat-icon farm-icon">
                  F
                </div>

                <span>FARMS</span>

              </div>

              <strong>{farms.length}</strong>

              <p>Registered farms</p>

            </div>


            <div
              className="stat-card"
              onClick={() => setActivePage("Crops")}
            >

              <div className="stat-top">

                <div className="stat-icon crop-icon">
                  C
                </div>

                <span>CROPS</span>

              </div>

              <strong>{crops.length}</strong>

              <p>Active crop records</p>

            </div>


            <div
              className="stat-card"
              onClick={() => setActivePage("Planting")}
            >

              <div className="stat-top">

                <div className="stat-icon planting-icon">
                  P
                </div>

                <span>PLANTING</span>

              </div>

              <strong>{plantings.length}</strong>

              <p>Planting activities</p>

            </div>


            <div
              className="stat-card"
              onClick={() => setActivePage("Harvests")}
            >

              <div className="stat-top">

                <div className="stat-icon harvest-icon">
                  H
                </div>

                <span>HARVESTS</span>

              </div>

              <strong>{harvests.length}</strong>

              <p>Harvest records</p>

            </div>

          </section>


          {/* TOTAL HARVEST */}

          <section className="stats-grid">

            <div className="stat-card">

              <div className="stat-top">

                <div className="stat-icon harvest-icon">
                  T
                </div>

                <span>TOTAL HARVEST</span>

              </div>

              <strong>
                {totalHarvest}
              </strong>

              <p>Total quantity harvested</p>

            </div>

          </section>

        </main>
      </>
    );
  };


  // =========================================================
  // FARMS PAGE
  // =========================================================

  const FarmsPage = () => {

    const [showForm, setShowForm] = useState(false);

    const [form, setForm] = useState({
      name: "",
      location: "",
      area: "",
    });


    const addFarm = () => {

      if (
        !form.name ||
        !form.location ||
        !form.area
      ) {

        alert("Please fill all fields");

        return;
      }


      const newFarm = {

        farmName: form.name,

        location: form.location,

        totalArea: Number(form.area),

      };


      axios
        .post(`${API}/farms`, newFarm)
        .then((response) => {

          setFarms([
            ...farms,
            response.data
          ]);


          setForm({
            name: "",
            location: "",
            area: "",
          });


          setShowForm(false);

          alert("Farm added successfully!");

        })
        .catch((error) => {

          console.error(
            "Error adding farm:",
            error
          );

          alert("Failed to add farm");

        });
    };


    const deleteFarm = (id) => {

      if (
        window.confirm(
          "Are you sure you want to delete this farm?"
        )
      ) {

        axios
          .delete(`${API}/farms/${id}`)
          .then(() => {

            setFarms(
              farms.filter(
                (farm) =>
                  farm.farmId !== id
              )
            );

            alert(
              "Farm deleted successfully!"
            );

          })
          .catch((error) => {

            console.error(
              "Error deleting farm:",
              error
            );

            alert(
              "Failed to delete farm"
            );

          });
      }
    };


    return (

      <ManagementPage
        title="Farms"
        subtitle="Manage your registered farms"
        showForm={showForm}
        setShowForm={setShowForm}
        form={form}
        setForm={setForm}
        onAdd={addFarm}
      >

        <table>

          <thead>

            <tr>

              <th>ID</th>

              <th>Farm Name</th>

              <th>Location</th>

              <th>Area</th>

              <th>Action</th>

            </tr>

          </thead>


          <tbody>

            {farms.map((farm) => (

              <tr key={farm.farmId}>

                <td>{farm.farmId}</td>

                <td>{farm.farmName}</td>

                <td>{farm.location}</td>

                <td>{farm.totalArea}</td>

                <td>

                  <button
                    className="delete-btn"
                    onClick={() =>
                      deleteFarm(
                        farm.farmId
                      )
                    }
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </ManagementPage>
    );
  };


  // =========================================================
  // CROPS PAGE
  // =========================================================

  const CropsPage = () => {

    const [showForm, setShowForm] =
      useState(false);


    const [form, setForm] = useState({

      id: "",
      name: "",
      type: "",
      status: "",

    });


    const addCrop = () => {

      if (
        !form.id ||
        !form.name ||
        !form.type ||
        !form.status
      ) {

        alert(
          "Please fill all fields"
        );

        return;
      }


      const newCrop = {

        cropId: Number(form.id),

        cropName: form.name,

        cropType: form.type,

        status: form.status,

      };


      axios
        .post(`${API}/crops`, newCrop)
        .then((response) => {

          setCrops([
            ...crops,
            response.data
          ]);


          setForm({

            id: "",
            name: "",
            type: "",
            status: "",

          });


          setShowForm(false);

          alert(
            "Crop added successfully!"
          );

        })
        .catch((error) => {

          console.error(
            "Error adding crop:",
            error
          );

          alert(
            "Failed to add crop"
          );

        });
    };


    const deleteCrop = (id) => {

      if (
        window.confirm(
          "Are you sure you want to delete this crop?"
        )
      ) {

        axios
          .delete(`${API}/crops/${id}`)
          .then(() => {

            setCrops(
              crops.filter(
                (crop) =>
                  crop.cropId !== id
              )
            );

            alert(
              "Crop deleted successfully!"
            );

          })
          .catch((error) => {

            console.error(
              "Error deleting crop:",
              error
            );

            alert(
              "Failed to delete crop"
            );

          });
      }
    };


    return (

      <ManagementPage
        title="Crops"
        subtitle="Manage your crops"
        showForm={showForm}
        setShowForm={setShowForm}
        form={form}
        setForm={setForm}
        onAdd={addCrop}
      >

        <table>

          <thead>

            <tr>

              <th>ID</th>

              <th>Crop Name</th>

              <th>Type</th>

              <th>Status</th>

              <th>Action</th>

            </tr>

          </thead>


          <tbody>

            {crops.map((crop) => (

              <tr key={crop.cropId}>

                <td>
                  {crop.cropId}
                </td>

                <td>
                  {crop.cropName}
                </td>

                <td>
                  {crop.cropType}
                </td>

                <td>
                  {crop.status}
                </td>

                <td>

                  <button
                    className="delete-btn"
                    onClick={() =>
                      deleteCrop(
                        crop.cropId
                      )
                    }
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </ManagementPage>
    );
  };


  // =========================================================
  // PLANTING PAGE
  // =========================================================

  const PlantingPage = () => {

    const [showForm, setShowForm] =
      useState(false);


    const [form, setForm] = useState({

      farm: "",
      crop: "",
      date: "",
      area: "",

    });


    const addPlanting = () => {

      if (
        !form.farm ||
        !form.crop ||
        !form.date ||
        !form.area
      ) {

        alert(
          "Please fill all fields"
        );

        return;
      }


      const newPlanting = {

        farmId: Number(form.farm),

        cropId: Number(form.crop),

        plantingDate: form.date,

        areaUsed: Number(form.area),

      };


      axios
        .post(
          `${API}/crop-plantings`,
          newPlanting
        )
        .then((response) => {

          setPlantings([
            ...plantings,
            response.data
          ]);


          setForm({

            farm: "",
            crop: "",
            date: "",
            area: "",

          });


          setShowForm(false);

          alert(
            "Crop planting added successfully!"
          );

        })
        .catch((error) => {

          console.error(
            "Error adding planting:",
            error
          );

          alert(
            "Failed to add crop planting"
          );

        });
    };


    const deletePlanting = (id) => {

      if (
        window.confirm(
          "Are you sure you want to delete this crop planting?"
        )
      ) {

        axios
          .delete(
            `${API}/crop-plantings/${id}`
          )
          .then(() => {

            setPlantings(

              plantings.filter(
                (planting) =>
                  planting.plantingId !== id
              )

            );


            alert(
              "Crop planting deleted successfully!"
            );

          })
          .catch((error) => {

            console.error(
              "Error deleting planting:",
              error
            );

            alert(
              "Failed to delete crop planting"
            );

          });
      }
    };


    return (

      <ManagementPage
        title="Planting"
        subtitle="Manage crop planting details"
        showForm={showForm}
        setShowForm={setShowForm}
        form={form}
        setForm={setForm}
        onAdd={addPlanting}
      >

        <table>

          <thead>

            <tr>

              <th>ID</th>

              <th>Farm ID</th>

              <th>Crop ID</th>

              <th>Planting Date</th>

              <th>Area Used</th>

              <th>Action</th>

            </tr>

          </thead>


          <tbody>

            {plantings.map(
              (planting) => (

                <tr
                  key={
                    planting.plantingId
                  }
                >

                  <td>
                    {planting.plantingId}
                  </td>

                  <td>
                    {planting.farmId}
                  </td>

                  <td>
                    {planting.cropId}
                  </td>

                  <td>
                    {planting.plantingDate}
                  </td>

                  <td>
                    {planting.areaUsed}
                  </td>

                  <td>

                    <button
                      className="delete-btn"
                      onClick={() =>
                        deletePlanting(
                          planting.plantingId
                        )
                      }
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              )
            )}

          </tbody>

        </table>

      </ManagementPage>
    );
  };


  // =========================================================
  // HARVEST PAGE
  // =========================================================

  const HarvestsPage = () => {

    const [showForm, setShowForm] =
      useState(false);


    const [form, setForm] = useState({

      planting: "",
      date: "",
      quantity: "",

    });


    // =======================================================
    // ADD HARVEST
    // =======================================================

    const addHarvest = () => {

      const newHarvest = {
        plantingId: Number(form.planting),
        quantity: Number(form.quantity),
        harvestDate: form.date
      };

      axios
        .post(
          `${API}/harvests/record`,
          newHarvest
        )
        .then(() => {

          alert("Harvest added successfully!");

          loadHarvests();
          loadHarvestDetails();
          loadAboveAverage();
          loadTotalHarvest();

          axios
            .get(`${API}/crops`)
            .then((response) => {
              setCrops(response.data);
            });

        })
        .catch((error) => {

          console.error(error);

          alert("Failed to add harvest");

        });
    };


    // =======================================================
    // DELETE HARVEST
    // =======================================================

    const deleteHarvest = (id) => {

      if (
        window.confirm(
          "Are you sure you want to delete this harvest?"
        )
      ) {

        axios
          .delete(
            `${API}/harvests/${id}`
          )
          .then(() => {

            setHarvests(

              harvests.filter(
                (harvest) =>
                  harvest.harvestId !== id
              )

            );


            loadHarvestDetails();

            loadAboveAverage();

            loadTotalHarvest();


            alert(
              "Harvest deleted successfully!"
            );

          })
          .catch((error) => {

            console.error(
              "Error deleting harvest:",
              error
            );

            alert(
              "Failed to delete harvest"
            );

          });
      }
    };


    return (

      <ManagementPage
        title="Harvests"
        subtitle="Manage harvest details"
        showForm={showForm}
        setShowForm={setShowForm}
        form={form}
        setForm={setForm}
        onAdd={addHarvest}
      >

        {/* =================================================
            NORMAL HARVEST TABLE
        ================================================= */}

        <table>

          <thead>

            <tr>

              <th>ID</th>

              <th>Planting ID</th>

              <th>Harvest Date</th>

              <th>Quantity</th>

              <th>Action</th>

            </tr>

          </thead>


          <tbody>

            {harvests.map(
              (harvest) => (

                <tr
                  key={
                    harvest.harvestId
                  }
                >

                  <td>
                    {harvest.harvestId}
                  </td>

                  <td>
                    {harvest.plantingId}
                  </td>

                  <td>
                    {harvest.harvestDate}
                  </td>

                  <td>
                    {harvest.quantity}
                  </td>

                  <td>

                    <button
                      className="delete-btn"
                      onClick={() =>
                        deleteHarvest(
                          harvest.harvestId
                        )
                      }
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              )
            )}

          </tbody>

        </table>


        {/* =================================================
    TOTAL HARVEST
================================================= */}

<div
  style={{
    marginTop: "25px",
    padding: "20px",
    borderRadius: "12px",
    background: "#ffffff",
    color: "#103a2c"
  }}
>

  <h3 style={{ color: "#103a2c" }}>
    Total Harvest
  </h3>

  <h2 style={{ color: "#103a2c" }}>
    {totalHarvest}
  </h2>

  <p style={{ color: "#103a2c" }}>
    Total quantity harvested
  </p>

</div>

        {/* =================================================
            COMPLETE HARVEST DETAILS
        ================================================= */}

        <div
          style={{
            marginTop: "25px"
          }}
        >

          <h3>
            Harvest Details
          </h3>


          <table>

            <thead>

              <tr>

                <th>ID</th>

                <th>Farm Name</th>

                <th>Crop Name</th>

                <th>Quantity</th>

                <th>Harvest Date</th>

              </tr>

            </thead>


            <tbody>

              {harvestDetails.map(
                (row, index) => (

                  <tr key={index}>

                    <td>
                      {row[0]}
                    </td>

                    <td>
                      {row[1]}
                    </td>

                    <td>
                      {row[2]}
                    </td>

                    <td>
                      {row[3]}
                    </td>

                    <td>
                      {row[4]}
                    </td>

                  </tr>

                )
              )}

            </tbody>

          </table>

        </div>


        {/* =================================================
            HIGH YIELD CROPS
        ================================================= */}

        <div
          style={{
            marginTop: "25px"
          }}
        >

          <h3>
            High Yield Crops
          </h3>


          <table>

            <thead>

              <tr>

                <th>Crop Name</th>

                <th>Quantity</th>

              </tr>

            </thead>


            <tbody>

              {aboveAverage.map(
                (row, index) => (

                  <tr key={index}>

                    <td>
                      {row[0]}
                    </td>

                    <td>
                      {row[1]}
                    </td>

                  </tr>

                )
              )}

            </tbody>

          </table>

        </div>

      </ManagementPage>
    );
  };


  // =========================================================
  // COMMON MANAGEMENT PAGE
  // =========================================================

  const ManagementPage = ({
    title,
    subtitle,
    showForm,
    setShowForm,
    form,
    setForm,
    onAdd,
    children,
  }) => {

    return (

      <>

        <header className="topbar">

          <div>

            <div className="small-title">
              AGRICULTURE MANAGEMENT
            </div>

            <h1>{title}</h1>

          </div>


          <div className="top-actions">

            <span>Spring Boot</span>

            <span>MySQL</span>

            <span>React</span>


            <button
              className="refresh-btn"
              onClick={refreshAllData}
            >
              ↻ Refresh
            </button>

          </div>

        </header>


        <main className="page-content">

          {/* PAGE HEADER */}

          <div className="page-header">

            <div>

              <div className="page-label">
                FARM MANAGEMENT
              </div>

              <h2>{title}</h2>

              <p>{subtitle}</p>

            </div>


            <button
              className="add-btn"
              onClick={() =>
                setShowForm(!showForm)
              }
            >

              + Add{" "}

              {title === "Planting"
                ? "Planting"
                : title.slice(0, -1)}

            </button>

          </div>


          {/* =================================================
              FORM
          ================================================= */}

          {showForm && (

            <div className="form-card">

              <h3>

                Add{" "}

                {title === "Planting"
                  ? "Planting"
                  : title.slice(0, -1)}

              </h3>


              {/* =================================================
                  FARM FORM
              ================================================= */}

              {title === "Farms" && (

                <div className="form-grid">

                  <input
                    type="text"
                    placeholder="Farm Name"
                    value={form.name}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        name:
                          e.target.value,
                      })
                    }
                  />


                  <input
                    type="text"
                    placeholder="Location"
                    value={form.location}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        location:
                          e.target.value,
                      })
                    }
                  />


                  <input
                    type="number"
                    placeholder="Area"
                    value={form.area}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        area:
                          e.target.value,
                      })
                    }
                  />

                </div>

              )}


              {/* =================================================
                  CROP FORM
              ================================================= */}

              {title === "Crops" && (

                <div className="form-grid">

                  <input
                    type="number"
                    placeholder="ID"
                    value={form.id}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        id:
                          e.target.value,
                      })
                    }
                  />


                  <input
                    type="text"
                    placeholder="Crop Name"
                    value={form.name}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        name:
                          e.target.value,
                      })
                    }
                  />


                  <input
                    type="text"
                    placeholder="Crop Type"
                    value={form.type}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        type:
                          e.target.value,
                      })
                    }
                  />


                  <input
                    type="text"
                    placeholder="Status"
                    value={form.status}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        status:
                          e.target.value,
                      })
                    }
                  />

                </div>

              )}


              {/* =================================================
                  PLANTING FORM
              ================================================= */}

              {title === "Planting" && (

                <div className="form-grid">

                  <input
                    type="number"
                    placeholder="Farm ID"
                    value={form.farm}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        farm:
                          e.target.value,
                      })
                    }
                  />


                  <input
                    type="number"
                    placeholder="Crop ID"
                    value={form.crop}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        crop:
                          e.target.value,
                      })
                    }
                  />


                  <input
                    type="date"
                    value={form.date}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        date:
                          e.target.value,
                      })
                    }
                  />


                  <input
                    type="number"
                    placeholder="Area Used"
                    value={form.area}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        area:
                          e.target.value,
                      })
                    }
                  />

                </div>

              )}


              {/* =================================================
                  HARVEST FORM
              ================================================= */}

              {title === "Harvests" && (

                <div className="form-grid">

                  <input
                    type="number"
                    placeholder="Planting ID"
                    value={form.planting}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        planting:
                          e.target.value,
                      })
                    }
                  />


                  <input
                    type="date"
                    value={form.date}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        date:
                          e.target.value,
                      })
                    }
                  />


                  <input
                    type="number"
                    placeholder="Quantity"
                    value={form.quantity}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        quantity:
                          e.target.value,
                      })
                    }
                  />

                </div>

              )}


              {/* =================================================
                  BUTTONS
              ================================================= */}

              <div className="form-buttons">

                <button
                  className="save-btn"
                  onClick={onAdd}
                >
                  Save
                </button>


                <button
                  className="cancel-btn"
                  onClick={() =>
                    setShowForm(false)
                  }
                >
                  Cancel
                </button>

              </div>

            </div>

          )}


          {/* =================================================
              TABLE
          ================================================= */}

          <div className="table-card">

            {children}

          </div>

        </main>

      </>
    );
  };


  // =========================================================
  // HARVEST RECORDING PAGE
  // =========================================================

  const HarvestRecordingPage = () => {

    const [form, setForm] = useState({
      planting: "",
      quantity: "",
      date: ""
    });

    const [message, setMessage] = useState("");


    // =======================================================
    // RECORD NEW HARVEST
    // =======================================================

    const recordHarvest = () => {

      if (
        !form.planting ||
        !form.quantity ||
        !form.date
      ) {

        alert("Please fill all fields");

        return;
      }


      const data = {

        plantingId: Number(form.planting),

        quantity: Number(form.quantity),

        harvestDate: form.date

      };


      axios
        .post(`${API}/harvests/record`, data)
        .then(() => {

          setMessage(
            "Harvest recorded successfully!"
          );


          setForm({

            planting: "",
            quantity: "",
            date: ""

          });


          // Refresh stored harvest records

          loadHarvests();


          // Refresh related data

          loadHarvestDetails();

          loadAboveAverage();

          loadTotalHarvest();


          // Refresh crop status

          axios
            .get(`${API}/crops`)
            .then((response) => {

              setCrops(response.data);

            });

        })
        .catch((error) => {

          console.error(
            "Error recording harvest:",
            error
          );

          setMessage(
            "Failed to record harvest"
          );

        });

    };


    return (

      <>

        {/* =================================================
            TOP BAR
        ================================================= */}

        <header className="topbar">

          <div>

            <div className="small-title">
              AGRICULTURE MANAGEMENT
            </div>

            <h1>
              Harvest Recording
            </h1>

          </div>


          <div className="top-actions">

            <span>Spring Boot</span>

            <span>MySQL</span>

            <span>React</span>


            <button
              className="refresh-btn"
              onClick={refreshAllData}
            >
              ↻ Refresh
            </button>

          </div>

        </header>


        <main className="page-content">


          {/* =================================================
              PAGE HEADER
          ================================================= */}

          <div className="page-header">

            <div>

              <div className="page-label">
                FARM MANAGEMENT
              </div>

              <h2>
                Harvest Recording
              </h2>

              <p>
                Record and view harvest records
              </p>

            </div>

          </div>


          {/* =================================================
              RECORD HARVEST FORM
          ================================================= */}

          <div className="form-card">

            <h3>
              Record Harvest
            </h3>


            <div className="form-grid">

              {/* =================================================
                  PLANTING ID DROPDOWN
              ================================================= */}

              <select
                value={form.planting}
                onChange={(e) =>
                  setForm({
                    ...form,
                    planting: e.target.value
                  })
                }
              >

                <option value="">
                  Select Planting ID
                </option>

                {plantings.map((planting) => (

                  <option
                    key={planting.plantingId}
                    value={planting.plantingId}
                  >
                    {planting.plantingId}
                  </option>

                ))}

              </select>


              {/* =================================================
                  QUANTITY
              ================================================= */}

              <input
                type="number"
                placeholder="Quantity"
                value={form.quantity}
                onChange={(e) =>
                  setForm({
                    ...form,
                    quantity: e.target.value
                  })
                }
              />


              {/* =================================================
                  HARVEST DATE
              ================================================= */}

              <input
                type="date"
                value={form.date}
                onChange={(e) =>
                  setForm({
                    ...form,
                    date: e.target.value
                  })
                }
              />

            </div>


            <div className="form-buttons">

              <button
                className="save-btn"
                onClick={recordHarvest}
              >
                Record Harvest
              </button>

            </div>


            {message && (

              <p
                style={{
                  marginTop: "15px",
                  fontWeight: "600"
                }}
              >
                {message}
              </p>

            )}

          </div>


          {/* =================================================
              STORED HARVEST RECORDS
          ================================================= */}

          <div
            className="table-card"
            style={{
              marginTop: "25px"
            }}
          >

            <h3>
              Stored Harvest Records
            </h3>


            <table>

              <thead>

                <tr>

                  <th>ID</th>

                  <th>Planting ID</th>

                  <th>Harvest Date</th>

                  <th>Quantity</th>

                </tr>

              </thead>


              <tbody>

                {harvests.map(
                  (harvest) => (

                    <tr
                      key={
                        harvest.harvestId
                      }
                    >

                      <td>
                        {harvest.harvestId}
                      </td>

                      <td>
                        {harvest.plantingId}
                      </td>

                      <td>
                        {harvest.harvestDate}
                      </td>

                      <td>
                        {harvest.quantity}
                      </td>

                    </tr>

                  )
                )}

              </tbody>

            </table>

          </div>


        </main>

      </>

    );
  };


  // =========================================================
  // PAGE SELECTOR
  // =========================================================

  const renderPage = () => {

    if (activePage === "Dashboard") {
      return <Dashboard />;
    }

    if (activePage === "Farms") {
      return <FarmsPage />;
    }

    if (activePage === "Crops") {
      return <CropsPage />;
    }

    if (activePage === "Planting") {
      return <PlantingPage />;
    }

    if (activePage === "Harvests") {
      return <HarvestsPage />;
    }

    if (activePage === "Harvest Recording") {
      return <HarvestRecordingPage />;
    }

  };


  // =========================================================
  // MAIN APP
  // =========================================================

  return (

    <div className="app">

      {/* SIDEBAR */}

      <aside className="sidebar">

        <div className="logo-section">

          <div className="logo-box">
            🌱
          </div>

          <div className="logo-text">

            <h2>
              FarmHub
            </h2>

            <p>
              Farm Management
            </p>

          </div>

        </div>


        {/* NAVIGATION */}

        <nav className="sidebar-nav">

          <button
            className={
              activePage === "Dashboard"
                ? "nav-item active"
                : "nav-item"
            }
            onClick={() =>
              setActivePage(
                "Dashboard"
              )
            }
          >

            <span>⌂</span>

            Dashboard

          </button>


          <button
            className={
              activePage === "Farms"
                ? "nav-item active"
                : "nav-item"
            }
            onClick={() =>
              setActivePage("Farms")
            }
          >

            <span>▦</span>

            Farms

          </button>


          <button
            className={
              activePage === "Crops"
                ? "nav-item active"
                : "nav-item"
            }
            onClick={() =>
              setActivePage("Crops")
            }
          >

            <span>◇</span>

            Crops

          </button>


          <button
            className={
              activePage === "Planting"
                ? "nav-item active"
                : "nav-item"
            }
            onClick={() =>
              setActivePage("Planting")
            }
          >

            <span>⌁</span>

            Planting

          </button>


          <button
            className={
              activePage === "Harvests"
                ? "nav-item active"
                : "nav-item"
            }
            onClick={() =>
              setActivePage("Harvests")
            }
          >

            <span>◆</span>

            Harvests

          </button>


          {/* HARVEST RECORDING */}

          <button
            className={
              activePage === "Harvest Recording"
                ? "nav-item active"
                : "nav-item"
            }
            onClick={() =>
              setActivePage("Harvest Recording")
            }
          >

            <span>✎</span>

            Harvest Recording

          </button>

        </nav>


        {/* SYSTEM STATUS */}

        <div className="system-status">

          <strong>
            System Online
          </strong>

          <div>

            <span className="online-dot"></span>

            REST API Connected

          </div>

        </div>

      </aside>


      {/* MAIN */}

      <div className="main-area">

        {renderPage()}

      </div>

    </div>

  );
}

export default App;