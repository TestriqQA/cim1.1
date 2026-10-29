import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Cinute InfoMedia | Web Development Company & Digital Marketing Agency';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 30%, #16213e 60%, #0f3460 100%)',
                    fontFamily: 'Inter, system-ui, sans-serif',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                {/* Background decorative elements */}
                <div
                    style={{
                        position: 'absolute',
                        top: -100,
                        right: -100,
                        width: 400,
                        height: 400,
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(0,138,193,0.3) 0%, transparent 70%)',
                        display: 'flex',
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        bottom: -80,
                        left: -80,
                        width: 350,
                        height: 350,
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(0,181,202,0.25) 0%, transparent 70%)',
                        display: 'flex',
                    }}
                />

                {/* Main content */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 16,
                        zIndex: 1,
                    }}
                >
                    {/* Brand name */}
                    <div
                        style={{
                            fontSize: 72,
                            fontWeight: 800,
                            letterSpacing: '-2px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 12,
                        }}
                    >
                        <span style={{ color: '#008ac1' }}>Cinute</span>
                        <span style={{ color: '#ffffff' }}>InfoMedia</span>
                    </div>

                    {/* Divider */}
                    <div
                        style={{
                            width: 120,
                            height: 4,
                            borderRadius: 2,
                            background: 'linear-gradient(90deg, #008ac1, #00b5ca)',
                            display: 'flex',
                        }}
                    />

                    {/* Tagline */}
                    <div
                        style={{
                            fontSize: 28,
                            color: '#94a3b8',
                            fontWeight: 500,
                            letterSpacing: '6px',
                            textTransform: 'uppercase',
                            display: 'flex',
                        }}
                    >
                        Build · Market · Scale
                    </div>

                    {/* Description */}
                    <div
                        style={{
                            fontSize: 20,
                            color: '#64748b',
                            fontWeight: 400,
                            marginTop: 24,
                            maxWidth: 700,
                            textAlign: 'center',
                            display: 'flex',
                        }}
                    >
                        Web Development · Mobile Apps · AI Solutions · Digital Marketing
                    </div>
                </div>

                {/* Bottom bar */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: 6,
                        background: 'linear-gradient(90deg, #008ac1, #00b5ca, #6B00D7, #008ac1)',
                        display: 'flex',
                    }}
                />
            </div>
        ),
        { ...size }
    );
}
