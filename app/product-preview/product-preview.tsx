import "./product-preview.css";

export function ProductPreview() {
  return (
    <>
      <div className="container productCard" style={{ height: "50vh" }}>
        <div className="row" style={{ height: "100%" }}>
          <div className="col-6" style={{ height: "100%", padding: "0px" }}>
            <img
              style={{ height: "100%" }}
              src="image-product-desktop.jpg"
            ></img>
          </div>
          <div className="col" style={{ padding: "12px" }}>
            <div className="row">PERFUME</div>
            <div className="row">Gabrielle Essence Eau De Parfum</div>
            <div className="row">
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Preformer-Creator for the House of CHANEL
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
