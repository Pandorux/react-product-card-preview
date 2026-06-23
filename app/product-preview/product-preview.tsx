import "./product-preview.css";

export function ProductPreview() {
  return (
    <>
      <div
        className="container productCard"
        style={{
          height: "50vh",
          borderRadius: "12.5px",
          overflow: "hidden",
          padding: "0px",
        }}
      >
        <div className="row" style={{ height: "100%" }}>
          <div className="col-6" style={{ height: "100%", padding: "0px" }}>
            <img
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
              src="image-product-desktop.jpg"
            ></img>
          </div>
          <div
            className="col"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "flex-start",
            }}
          >
            <div className="row">
              <p>PERFUME</p>
            </div>
            <div className="row">
              <p>Gabrielle Essence Eau De Parfum</p>
            </div>
            <div className="row">
              <p>
                A floral, solar and voluptuous interpretation composed by
                Olivier Polge, Preformer-Creator for the House of CHANEL
              </p>
            </div>
            <div className="row">
              <div className="col">$149.99</div>
              <div className="col">$169.99</div>
            </div>
            <div>
              <button>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
