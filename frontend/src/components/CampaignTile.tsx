import { Campaign } from "../types/campaigns";

const CampaignTile = (props: { data: Campaign[]; }) => {
  return (
    <div className="campaigns">
        <h1>Live &amp; Recent Campaigns</h1>
        <p className="subtitle">Invest in exciting Australian brands</p>
        <div className="campaign-tiles">
        {props.data.map((c,key) => (
          <div
            key={key}
          >
            <div
            style={{
              background: `url(${c.company.coverImage}) center center / cover`,
              height: 125,
              borderRadius: 12
            }}
            ></div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                padding: "2rem 0",
                gap: "1rem",
                paddingLeft: 40,
                paddingRight: 40
              }}
            >
              <div
                style={{
                  flex: 1,
                  padding: "1rem",
                  borderRadius: 12,
                  display: "flex",
                  justifyContent: "center",
                  backgroundColor: c.company.logoColour || "var(--neutral)",
                  width: 48,
                  height: 48,
                }}
              >
                <img
                  style={{
                    margin: "auto",
                    maxWidth: "100%",
                    maxHeight: "100%",
                  }}
                  src={c.company.logoImage}
                  alt={c.company.name}
                />
              </div>
              <div style={{ flex: 2, textShadow:'1px 1px 2px rgba(0,0,0,0.5)' }}>
                <span style={{ fontWeight: 600 }}>{c.company.name}</span>
                <br />
                <span>{c.company.industry}</span>
              </div>
            </div>
            <p>
            <span style={{fontWeight: 600}}>{c.type === "EOI"
                ? "Expression Of Interest"
                : "Offer"}</span>
              <br/>
              <span>{
              c.closingInDays > 0
              ?`Closes in ${Math.floor(c.closingInDays)} days`
              :`Closed at ${c.closeDateFormatted}`}</span>
            </p>
          </div>
        ))}
      </div>
      </div>
  )
}
  
  export default CampaignTile;
  