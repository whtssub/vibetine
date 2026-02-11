import { useState, useEffect, useRef, useCallback, type CSSProperties } from 'react';
import './App.css';

// Pixel Heart SVG Component
interface PixelHeartProps {
  className?: string;
  color?: string;
  style?: CSSProperties;
}

const PixelHeart = ({ className = '', color = '#e11d48', style }: PixelHeartProps) => (
  <svg viewBox="0 0 24 24" className={`pixel-art ${className}`} fill={color} style={style}>
    <path d="M4 4h4v4H4V4zm12 0h4v4h-4V4zM2 6h2v4H2V6zm18 0h2v4h-2V6zM0 8h2v8H0V8zm22 0h2v8h-2V8zM2 14h2v4H2v-4zm18 0h2v4h-2v-4zM4 18h4v4H4v-4zm12 0h4v4h-4v-4zM8 20h8v4H8v-4zM6 8h4v4H6V8zm8 0h4v4h-4V8zM8 12h8v4H8v-4z" />
  </svg>
);

// Pixel Rose SVG Component
interface PixelRoseProps {
  className?: string;
  style?: CSSProperties;
}

const PixelRose = ({ className = '', style }: PixelRoseProps) => (
  <svg viewBox="0 0 32 32" className={`pixel-art ${className}`} fill="#e11d48" style={style}>
    <path d="M12 2h8v4h-8V2zm8 4h4v4h-4V6zm-12 0h4v4H8V6zm16 4h4v4h-4v-4zM4 10h4v4H4v-4zm24 0h4v4h-4v-4zM2 14h4v4H2v-4zm28 0h4v4h-4v-4zM0 18h4v4H0v-4zm32 0v4h-4v-4h4zM4 22h4v4H4v-4zm24 0h4v4h-4v-4zM8 26h4v4H8v-4zm16 0h4v4h-4v-4zM12 30h8v2h-8v-2z" fill="#be123c"/>
    <path d="M14 6h4v4h-4V6zm-2 4h4v4h-4v-4zm8 0h4v4h-4v-4zm-4 4h4v4h-4v-4zm-6 4h4v4H10v-4zm12 0h4v4h-4v-4z" fill="#fb7185"/>
    <path d="M14 26h4v6h-4v-6z" fill="#166534"/>
    <path d="M12 20h2v6h-2v-6zm6 0h2v6h-2v-6z" fill="#15803d"/>
  </svg>
);

// Pixel Cupid SVG Component
interface PixelCupidProps {
  className?: string;
  style?: CSSProperties;
}

const PixelCupid = ({ className = '', style }: PixelCupidProps) => (
  <svg viewBox="0 0 40 40" className={`pixel-art ${className}`} style={style}>
    <path d="M16 4h8v4h-8V4zm-4 4h4v4h-4V8zm12 0h4v4h-4V8zM8 12h8v4H8v-4zm16 0h8v4h-8v-4zM4 16h4v4H4v-4zm32 0h4v4h-4v-4z" fill="#fde047"/>
    <path d="M12 16h4v4h-4v-4zm12 0h4v4h-4v-4zM8 20h24v4H8v-4z" fill="#fcd34d"/>
    <path d="M12 24h4v4h-4v-4zm12 0h4v4h-4v-4z" fill="#fbbf24"/>
    <path d="M8 28h8v4H8v-4zm16 0h8v4h-8v-4z" fill="#f59e0b"/>
    <path d="M16 32h8v4h-8v-4z" fill="#d97706"/>
    <path d="M4 8h4v4H4V8zm32 0h4v4h-4V8z" fill="#fef3c7"/>
    <path d="M0 12h4v4H0v-4zm36 0h4v4h-4v-4z" fill="#fde68a"/>
  </svg>
);

// Pixel Ring SVG Component
interface PixelRingProps {
  className?: string;
  style?: CSSProperties;
}

const PixelRing = ({ className = '', style }: PixelRingProps) => (
  <svg viewBox="0 0 32 32" className={`pixel-art ${className}`} style={style}>
    <circle cx="16" cy="16" r="12" fill="none" stroke="#d4a574" strokeWidth="4"/>
    <circle cx="16" cy="16" r="6" fill="#e11d48"/>
    <path d="M14 10h4v4h-4v-4z" fill="#fb7185"/>
  </svg>
);

// Pixel Broken Heart SVG Component
interface PixelBrokenHeartProps {
  className?: string;
  style?: CSSProperties;
}

const PixelBrokenHeart = ({ className = '', style }: PixelBrokenHeartProps) => (
  <svg viewBox="0 0 24 24" className={`pixel-art ${className}`} fill="#9ca3af" style={style}>
    <path d="M4 4h4v4H4V4zm12 0h4v4h-4V4zM2 6h2v4H2V6zm18 0h2v4h-2V6zM0 8h2v8H0V8zm22 0h2v8h-2V8zM2 14h2v4H2v-4zm18 0h2v4h-2v-4zM4 18h4v4H4v-4zm12 0h4v4h-4v-4zM8 20h8v4H8v-4zM6 8h4v4H6V8zm8 0h2v2h-2V8zm2 2h2v2h-2v-2zm-2 2h2v2h-2v-2zM8 12h4v4H8v-4z" />
  </svg>
);

// Confetti Component
const Confetti = ({ colors }: { colors: string[] }) => {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 2}s`,
    duration: `${3 + Math.random() * 2}s`,
    color: colors[Math.floor(Math.random() * colors.length)],
    size: `${6 + Math.random() * 8}px`,
    rotation: `${Math.random() * 360}deg`,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute top-0 confetti"
          style={{
            left: p.left,
            animationDelay: p.delay,
            animationDuration: p.duration,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            transform: `rotate(${p.rotation})`,
          }}
        />
      ))}
    </div>
  );
};

// Floating Hearts Component
const FloatingHearts = () => {
  const hearts = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 5}s`,
    duration: `${6 + Math.random() * 4}s`,
    size: `${16 + Math.random() * 24}px`,
    opacity: 0.3 + Math.random() * 0.4,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((h) => (
        <div
          key={h.id}
          className="absolute animate-float"
          style={{
            left: h.left,
            bottom: '-50px',
            animationDelay: h.delay,
            animationDuration: h.duration,
            opacity: h.opacity,
          }}
        >
          <PixelHeart 
            className="animate-heartbeat" 
            style={{ width: h.size, height: h.size }}
            color={`rgba(225, 29, 72, ${h.opacity})`}
          />
        </div>
      ))}
    </div>
  );
};

// 3D Carousel Component
const CelebrationCarousel = () => {
  const items = [
    { Icon: PixelRose, label: 'Love', color: '#e11d48' },
    { Icon: PixelHeart, label: 'Forever', color: '#fb7185' },
    { Icon: PixelCupid, label: 'Together', color: '#f59e0b' },
    { Icon: PixelRing, label: 'Always', color: '#d4a574' },
  ];

  const [rotation, setRotation] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 0.5) % 360);
    }, 16);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div 
      className="relative w-80 h-80 mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div 
        className="absolute inset-0 carousel-3d"
        style={{ transform: `rotateY(${rotation}deg)` }}
      >
        {items.map((item, index) => {
          const angle = (360 / items.length) * index;
          const { Icon } = item;
          return (
            <div
              key={index}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 carousel-item"
              style={{
                transform: `rotateY(${angle}deg) translateZ(120px)`,
              }}
            >
              <div 
                className="glass-romantic rounded-2xl p-6 flex flex-col items-center gap-3 animate-pixel-bounce"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Icon className="w-16 h-16" />
                <span className="font-display text-lg font-semibold" style={{ color: item.color }}>
                  {item.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Center Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-r from-rose-400/30 to-pink-400/30 blur-2xl animate-pulse" />
    </div>
  );
};

// Sparkle Effect Component
const Sparkles = () => {
  const sparkles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: `${10 + Math.random() * 80}%`,
    top: `${10 + Math.random() * 80}%`,
    delay: `${Math.random() * 2}s`,
    size: `${4 + Math.random() * 12}px`,
  }));

  return (
    <>
      {sparkles.map((s) => (
        <div
          key={s.id}
          className="absolute pointer-events-none"
          style={{
            left: s.left,
            top: s.top,
            animation: `sparkle 2s ease-in-out ${s.delay} infinite`,
          }}
        >
          <svg width={s.size} height={s.size} viewBox="0 0 24 24" fill="#d4a574">
            <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10L12 0Z" />
          </svg>
        </div>
      ))}
    </>
  );
};

// Love Burst Effect
const LoveBurst = ({ x, y }: { x: number; y: number }) => {
  const hearts = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    angle: (360 / 12) * i,
    distance: 80 + Math.random() * 60,
    size: 16 + Math.random() * 16,
    delay: Math.random() * 0.3,
  }));

  return (
    <div 
      className="fixed pointer-events-none z-50"
      style={{ left: x, top: y, transform: 'translate(-50%, -50%)' }}
    >
      {hearts.map((h) => (
        <div
          key={h.id}
          className="absolute"
          style={{
            animation: `love-burst 1s ease-out ${h.delay}s forwards`,
            transform: `rotate(${h.angle}deg) translateX(${h.distance}px)`,
          }}
        >
          <PixelHeart 
            style={{ width: h.size, height: h.size }}
            color="#e11d48"
          />
        </div>
      ))}
    </div>
  );
};

// Runaway No Button Component - Smooth Physics-Based Animation
interface RunawayButtonProps {
  onCatch?: () => void;
}

const RunawayButton = ({ onCatch }: RunawayButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Use refs for smooth animation values (updated every frame)
  const targetPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const velocity = useRef({ x: 0, y: 0 });
  const targetRotation = useRef(0);
  const currentRotation = useRef(0);
  
  // React state for render-triggering updates only
  const [renderPos, setRenderPos] = useState({ x: 0, y: 0 });
  const [renderRotation, setRenderRotation] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [message, setMessage] = useState('No');
  
  const animationFrameRef = useRef<number | null>(null);
  const lastMessageChange = useRef(0);
  
  const funnyMessages = [
    'No',
    'Nice try!',
    'Too slow!',
    'Catch me!',
    'Nope!',
    'Missed!',
    'Almost!',
    'Not today!',
    'Keep trying!',
    'So close!',
  ];

  // Smooth spring physics animation loop
  useEffect(() => {
    const springStrength = 0.08; // How fast it follows target
    const damping = 0.85; // How much velocity decays (0-1)
    const maxVelocity = 25; // Speed limit
    
    const animate = () => {
      // Calculate spring force toward target
      const dx = targetPos.current.x - currentPos.current.x;
      const dy = targetPos.current.y - currentPos.current.y;
      
      // Apply spring force to velocity
      velocity.current.x += dx * springStrength;
      velocity.current.y += dy * springStrength;
      
      // Apply damping (friction)
      velocity.current.x *= damping;
      velocity.current.y *= damping;
      
      // Clamp velocity
      const speed = Math.sqrt(velocity.current.x ** 2 + velocity.current.y ** 2);
      if (speed > maxVelocity) {
        velocity.current.x = (velocity.current.x / speed) * maxVelocity;
        velocity.current.y = (velocity.current.y / speed) * maxVelocity;
      }
      
      // Update position
      currentPos.current.x += velocity.current.x;
      currentPos.current.y += velocity.current.y;
      
      // Smooth rotation interpolation
      const rotDiff = targetRotation.current - currentRotation.current;
      currentRotation.current += rotDiff * 0.1;
      
      // Trigger React render (throttled to every 2nd frame for performance)
      setRenderPos({ ...currentPos.current });
      setRenderRotation(currentRotation.current);
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    
    animationFrameRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Mouse tracking with smooth escape logic
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!buttonRef.current || !containerRef.current) return;
      
      const button = buttonRef.current;
      const rect = button.getBoundingClientRect();
      const buttonCenterX = rect.left + rect.width / 2;
      const buttonCenterY = rect.top + rect.height / 2;
      
      // Calculate distance between mouse and button center
      const distanceX = e.clientX - buttonCenterX;
      const distanceY = e.clientY - buttonCenterY;
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
      
      // If mouse is within danger zone, run away!
      const dangerRadius = 180;
      if (distance < dangerRadius && distance > 0) {
        setIsRunning(true);
        
        // Calculate escape direction (opposite to mouse)
        const escapeDirX = -(distanceX / distance);
        const escapeDirY = -(distanceY / distance);
        
        // Escape force increases as mouse gets closer
        const proximityFactor = 1 - (distance / dangerRadius);
        const escapeForce = 80 + proximityFactor * 100;
        
        // Add perpendicular movement for more interesting escape patterns
        const perpX = -escapeDirY * (Math.random() - 0.5) * 60;
        const perpY = escapeDirX * (Math.random() - 0.5) * 60;
        
        // Calculate new target position
        const newTargetX = targetPos.current.x + escapeDirX * escapeForce + perpX;
        const newTargetY = targetPos.current.y + escapeDirY * escapeForce + perpY;
        
        // Apply boundaries with soft clamping
        const maxX = 250;
        const maxY = 180;
        targetPos.current = {
          x: Math.max(-maxX, Math.min(maxX, newTargetX)),
          y: Math.max(-maxY, Math.min(maxY, newTargetY)),
        };
        
        // Smooth rotation based on escape direction
        const escapeAngle = Math.atan2(escapeDirY, escapeDirX) * (180 / Math.PI);
        targetRotation.current = escapeAngle * 0.15 + (Math.random() - 0.5) * 10;
        
        // Change message occasionally (throttled)
        const now = Date.now();
        if (now - lastMessageChange.current > 800 && Math.random() > 0.6) {
          lastMessageChange.current = now;
          const newIndex = Math.floor(Math.random() * funnyMessages.length);
          setMessage(funnyMessages[newIndex]);
        }
      } else if (distance > dangerRadius + 50) {
        // Slowly return to center when mouse is far away
        targetPos.current = {
          x: targetPos.current.x * 0.95,
          y: targetPos.current.y * 0.95,
        };
        targetRotation.current = targetRotation.current * 0.9;
        
        if (Math.abs(targetPos.current.x) < 5 && Math.abs(targetPos.current.y) < 5) {
          setIsRunning(false);
          targetPos.current = { x: 0, y: 0 };
          targetRotation.current = 0;
        }
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleClick = () => {
    onCatch?.();
    setMessage('You got me!');
    
    // Reset after delay
    setTimeout(() => {
      setMessage('No');
      targetPos.current = { x: 0, y: 0 };
      targetRotation.current = 0;
      setIsRunning(false);
    }, 1200);
  };

  return (
    <div ref={containerRef} className="relative" style={{ width: '140px', height: '60px' }}>
      <button
        ref={buttonRef}
        onClick={handleClick}
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-8 py-4 rounded-full font-display text-lg font-semibold whitespace-nowrap transition-colors duration-300 ${
          isRunning 
            ? 'bg-gradient-to-r from-gray-200 to-gray-300 text-gray-600' 
            : 'bg-white/70 text-gray-500 hover:bg-white/90'
        }`}
        style={{
          transform: `translate(calc(-50% + ${renderPos.x}px), calc(-50% + ${renderPos.y}px)) rotate(${renderRotation}deg)`,
          boxShadow: isRunning 
            ? '0 8px 25px rgba(0,0,0,0.15), 0 2px 8px rgba(0,0,0,0.1)' 
            : '0 4px 15px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.9)',
          border: '2px solid rgba(156, 163, 175, 0.25)',
          zIndex: isRunning ? 50 : 10,
          willChange: 'transform',
        }}
      >
        <span className="flex items-center gap-2">
          <PixelBrokenHeart className="w-5 h-5" />
          {message}
        </span>
      </button>
    </div>
  );
};

// Main App Component
function App() {
  const [isAccepted, setIsAccepted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [burstPosition, setBurstPosition] = useState<{ x: number; y: number } | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [catchCount, setCatchCount] = useState(0);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleAccept = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setBurstPosition({
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    });
    setIsAccepted(true);
    setShowConfetti(true);
    
    // Hide burst after animation
    setTimeout(() => setBurstPosition(null), 1500);
  }, []);

  const handleCatchNoButton = () => {
    setCatchCount((prev) => prev + 1);
  };

  const confettiColors = ['#e11d48', '#fb7185', '#fecdd3', '#d4a574', '#fbbf24', '#f59e0b'];

  return (
    <div className="min-h-screen bg-gradient-romantic relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, rgba(225, 29, 72, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, rgba(251, 113, 133, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 50% 50%, rgba(212, 165, 116, 0.05) 0%, transparent 50%)`,
        }} />
      </div>

      {/* Floating Hearts Background */}
      <FloatingHearts />

      {/* Confetti */}
      {showConfetti && <Confetti colors={confettiColors} />}

      {/* Love Burst Effect */}
      {burstPosition && <LoveBurst x={burstPosition.x} y={burstPosition.y} />}

      {/* Main Content */}
      <main className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
        {!isAccepted ? (
          /* Proposal Screen */
          <div className="text-center animate-fade-in-up">
            {/* Decorative Elements */}
            <div className="flex justify-center gap-8 mb-8">
              <PixelRose className="w-16 h-16 animate-float" />
              <PixelHeart className="w-20 h-20 animate-heartbeat text-rose-500" />
              <PixelRose className="w-16 h-16 animate-float" style={{ animationDelay: '0.5s' }} />
            </div>

            {/* Title */}
            <h1 className="font-display text-5xl md:text-7xl font-bold text-rose-700 mb-4 tracking-tight">
              Be My Valentine?
            </h1>

            {/* Subtitle */}
            <p className="font-body text-lg md:text-xl text-rose-500/80 mb-12 max-w-md mx-auto">
              I've been waiting for the perfect moment to ask you this...
            </p>

            {/* Buttons Container */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
              {/* Main Yes Button */}
              <button
                ref={buttonRef}
                onClick={handleAccept}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className={`btn-valentine animate-pulse-glow transition-all duration-500 ${
                  isHovering ? 'scale-105' : ''
                }`}
              >
                <span className="relative z-10 flex items-center gap-3">
                  <PixelHeart className="w-6 h-6" color="white" />
                  Yes, I'd Love To!
                  <PixelHeart className="w-6 h-6" color="white" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-pink-400 opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </button>

              {/* Runaway No Button */}
              <RunawayButton onCatch={handleCatchNoButton} />
            </div>

            {/* Catch Counter (hidden Easter egg) */}
            {catchCount > 0 && (
              <p className="text-sm text-rose-400/60 font-body mb-8">
                You caught the "No" button {catchCount} time{catchCount !== 1 ? 's' : ''}! 
                {catchCount >= 5 ? " You're persistent! 😄" : ''}
              </p>
            )}

            {/* Small Hearts Decoration */}
            <div className="flex justify-center gap-4 mt-8 opacity-60">
              {Array.from({ length: 5 }).map((_, i) => (
                <PixelHeart 
                  key={i}
                  className="animate-float"
                  style={{ 
                    width: `${12 + i * 4}px`, 
                    height: `${12 + i * 4}px`,
                    animationDelay: `${i * 0.2}s`,
                    animationDuration: `${3 + i * 0.5}s`
                  }}
                  color={`rgba(225, 29, 72, ${0.4 + i * 0.1})`}
                />
              ))}
            </div>
          </div>
        ) : (
          /* Celebration Screen */
          <div className="text-center animate-fade-in-up w-full max-w-4xl">
            {/* Success Message */}
            <div className="relative mb-8">
              <Sparkles />
              <div className="flex justify-center gap-6 mb-6">
                <PixelCupid className="w-20 h-20 animate-bounce" />
                <PixelHeart className="w-24 h-24 animate-heartbeat text-rose-500" />
                <PixelCupid className="w-20 h-20 animate-bounce" style={{ animationDelay: '0.3s' }} />
              </div>
              
              <h1 className="font-display text-5xl md:text-7xl font-bold text-rose-700 mb-4">
                You Said Yes!
              </h1>
              <p className="font-body text-xl md:text-2xl text-rose-500/80 mb-8">
                You've made me the happiest person in the world!
              </p>
            </div>

            {/* 3D Carousel */}
            <div className="mb-12">
              <CelebrationCarousel />
            </div>

            {/* Love Message Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {[
                { Icon: PixelHeart, text: 'Forever', color: '#e11d48' },
                { Icon: PixelRose, text: 'Yours', color: '#be123c' },
                { Icon: PixelRing, text: 'Mine', color: '#d4a574' },
                { Icon: PixelCupid, text: 'Love', color: '#f59e0b' },
              ].map((item, index) => {
                const { Icon } = item;
                return (
                  <div
                    key={index}
                    className="glass-romantic rounded-xl p-4 animate-fade-in-up hover:scale-105 transition-transform duration-300"
                    style={{ animationDelay: `${0.5 + index * 0.15}s` }}
                  >
                    <Icon className="w-12 h-12 mx-auto mb-2" style={{ color: item.color }} />
                    <span className="font-display font-semibold" style={{ color: item.color }}>
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Reset Button */}
            <button
              onClick={() => {
                setIsAccepted(false);
                setShowConfetti(false);
                setCatchCount(0);
              }}
              className="mt-12 px-8 py-3 rounded-full font-body text-rose-600 bg-white/50 hover:bg-white/80 transition-colors duration-300 border border-rose-200"
            >
              Ask Again
            </button>
          </div>
        )}
      </main>

      {/* Footer Decoration */}
      <footer className="absolute bottom-0 left-0 right-0 py-6 text-center">
        <div className="flex justify-center gap-2 opacity-40">
          {Array.from({ length: 8 }).map((_, i) => (
            <PixelHeart 
              key={i}
              style={{ 
                width: '8px', 
                height: '8px',
                animationDelay: `${i * 0.1}s`
              }}
              color="rgba(225, 29, 72, 0.5)"
            />
          ))}
        </div>
        <p className="font-body text-sm text-rose-400/60 mt-2">
          Made with love
        </p>
      </footer>
    </div>
  );
}

export default App;
