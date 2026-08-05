<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Schedule - PT Triunfara Abadi Nusantara</title>

<link rel="stylesheet" href="style.css">
</head>

<body>

<!-- NAVBAR -->
<header id="navbar" class="ultra-navbar">

  <div class="nav">

    <div class="logo-area">
      <img src="pictures/logo.png">

      <h2>PT TRIUNFARA ABADI NUSANTARA</h2>
    </div>

    <div class="menu">
      <a href="index.php">Home</a>
      <a href="services.php">Services</a>
      <a href="schedule.php">Schedule</a>
      <a href="shipping_rates.php">Shipping Rates</a>
      <a href="contact.php">Contact</a>
    </div>

  </div>

</header>

<!-- HERO -->
<section class="schedule-hero">

  <div class="schedule-hero-overlay">

    <div class="schedule-hero-content">

      <span class="schedule-badge">
        Global Export Import Schedule
      </span>

      <h1>
        Worldwide Cargo <br>
        Shipping Schedule
      </h1>

      <p>
        Professional export & import logistics schedule
        with worldwide international coverage.
      </p>

    </div>

  </div>

</section>

<!-- STATS -->
<section class="schedule-stats">

  <div class="stats-box">
    <h2>68+</h2>
    <p>Shipping Routes</p>
  </div>

  <div class="stats-box">
    <h2>24</h2>
    <p>Destinations</p>
  </div>

  <div class="stats-box">
    <h2>50+</h2>
    <p>Global Partners</p>
  </div>

  <div class="stats-box">
    <h2>1000+</h2>
    <p>Shipments</p>
  </div>

</section>

<!-- SELECTOR -->
<section class="schedule-selector">

  <div class="selector-container">

    <button class="schedule-tab active"
    onclick="showSchedule('export')">

      Export Schedule

    </button>

    <button class="schedule-tab"
    onclick="showSchedule('import')">

      Import Schedule

    </button>

  </div>

</section>

<!-- EXPORT -->
<section class="schedule-table-section"
id="exportSchedule">

  <div class="table-container">

    <table class="premium-table">

      <thead>

        <tr>
          <th>Route</th>
          <th>Service</th>
          <th>Departure</th>
          <th>Arrival</th>
          <th>Status</th>
        </tr>

      </thead>

      <tbody>

        <tr>
          <td>Indonesia → Japan</td>
          <td>Ocean Freight</td>
          <td>Monday</td>
          <td>12-18 Days</td>
          <td>
            <span class="status active">
              Open
            </span>
          </td>
        </tr>

        <tr>
          <td>Indonesia → Singapore</td>
          <td>Air Freight</td>
          <td>Daily</td>
          <td>1-2 Days</td>
          <td>
            <span class="status active">
              Open
            </span>
          </td>
        </tr>

        <tr>
          <td>Indonesia → Germany</td>
          <td>FCL / LCL</td>
          <td>Wednesday</td>
          <td>25-30 Days</td>
          <td>
            <span class="status pending">
              Limited
            </span>
          </td>
        </tr>

        <tr>
          <td>Indonesia → China</td>
          <td>Breakbulk</td>
          <td>Friday</td>
          <td>10-15 Days</td>
          <td>
            <span class="status active">
              Open
            </span>
          </td>
        </tr>

      </tbody>

    </table>

  </div>

</section>

<!-- IMPORT -->
<section class="schedule-table-section import-hidden"
id="importSchedule">

  <div class="table-container">

    <table class="premium-table">

      <thead>

        <tr>
          <th>Route</th>
          <th>Service</th>
          <th>Departure</th>
          <th>Arrival</th>
          <th>Status</th>
        </tr>

      </thead>

      <tbody>

        <tr>
          <td>Japan → Indonesia</td>
          <td>Ocean Freight</td>
          <td>Tuesday</td>
          <td>14-20 Days</td>
          <td>
            <span class="status active">
              Open
            </span>
          </td>
        </tr>

        <tr>
          <td>Singapore → Indonesia</td>
          <td>Air Freight</td>
          <td>Daily</td>
          <td>1-3 Days</td>
          <td>
            <span class="status active">
              Open
            </span>
          </td>
        </tr>

        <tr>
          <td>Germany → Indonesia</td>
          <td>Consolidator</td>
          <td>Thursday</td>
          <td>28-35 Days</td>
          <td>
            <span class="status pending">
              Limited
            </span>
          </td>
        </tr>

        <tr>
          <td>China → Indonesia</td>
          <td>Breakbulk</td>
          <td>Saturday</td>
          <td>9-14 Days</td>
          <td>
            <span class="status active">
              Open
            </span>
          </td>
        </tr>

      </tbody>

    </table>

  </div>

</section>

<!-- CTA -->
<section class="schedule-cta">

  <div class="cta-box">

    <h2>
      Need Custom Shipping Schedule?
    </h2>

    <p>
      Contact our logistics specialist for urgent cargo,
      export-import solutions, and global freight handling.
    </p>

    <a href="contact.php"
    class="cta-btn">

      Contact Us

    </a>

  </div>

</section>

<script src="script.js"></script>

</body>
</html>