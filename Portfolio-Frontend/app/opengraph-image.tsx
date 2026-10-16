import { ImageResponse } from "next/og"
import { portfolioData } from "@/data/portfolio"

export const runtime = "edge"
export const alt = `${portfolioData.personal.name} — ${portfolioData.personal.role}`
export const size = {
    width: 1200,
    height: 630,
}
export const contentType = "image/png"

export default async function Image() {
    const { personal } = portfolioData

    return new ImageResponse(
        (
            <div
                style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    backgroundColor: "#FAF8F5",
                    padding: "80px",
                    border: "1px solid #E5E1DA",
                }}
            >
                {/* Header Metadata */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                    }}
                >
                    <div
                        style={{
                            width: "32px",
                            height: "2px",
                            backgroundColor: "#111111",
                        }}
                    />
                    <div
                        style={{
                            fontSize: "20px",
                            fontFamily: "monospace",
                            textTransform: "uppercase",
                            letterSpacing: "0.2em",
                            color: "#6B6B6B",
                        }}
                    >
                        Portfolio / Selected Work
                    </div>
                </div>

                {/* Main Typographic Headline */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "16px",
                    }}
                >
                    <div
                        style={{
                            fontSize: "84px",
                            fontFamily: "serif",
                            color: "#111111",
                            letterSpacing: "-0.03em",
                            lineHeight: 1.05,
                        }}
                    >
                        {personal.name}
                    </div>
                    <div
                        style={{
                            fontSize: "42px",
                            fontFamily: "serif",
                            fontStyle: "italic",
                            color: "#6B6B6B",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        {personal.role}
                    </div>
                </div>

                {/* Footer Metadata */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-end",
                        borderTop: "1px solid #E5E1DA",
                        paddingTop: "32px",
                    }}
                >
                    <div
                        style={{
                            fontSize: "18px",
                            fontFamily: "monospace",
                            textTransform: "uppercase",
                            letterSpacing: "0.15em",
                            color: "#6B6B6B",
                        }}
                    >
                        Python / Django / Systems
                    </div>
                    <div
                        style={{
                            fontSize: "18px",
                            fontFamily: "monospace",
                            color: "#111111",
                        }}
                    >
                        {personal.email}
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
