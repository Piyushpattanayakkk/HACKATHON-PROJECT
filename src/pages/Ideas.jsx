import React from 'react'

function Ideas() {
  const ideas = [
    { 
      title: "Modular Kitchen", 
      desc: "Upgrade your kitchen with smart storage and modern finishes.", 
      cost: "₹80,000 – ₹1,50,000"
    },
    { 
      title: "Solar Panels", 
      desc: "Save energy and reduce bills with rooftop solar solutions.", 
      cost: "₹1,20,000 – ₹2,50,000"
    },
    { 
      title: "Indoor Plants", 
      desc: "Bring life to your home and improve air quality.", 
      cost: "₹2,000 – ₹10,000"
    },
    { 
      title: "Smart Lighting", 
      desc: "Install energy-efficient, sensor-based lighting.", 
      cost: "₹5,000 – ₹15,000"
    },
    { 
      title: "Balcony Garden", 
      desc: "Create a peaceful green corner in your home.", 
      cost: "₹10,000 – ₹25,000"
    },
    { 
      title: "Wall Repainting", 
      desc: "Give your house a fresh new look with trendy colors.", 
      cost: "₹20,000 – ₹50,000"
    },
    { 
      title: "False Ceiling with Lights", 
      desc: "Add elegance and better lighting to your living room.", 
      cost: "₹30,000 – ₹70,000"
    },
  ]

  return (
    <div className="ideas">
      <h2>✨ Home Improvement Ideas</h2>
      <p style={{ color: "#555", marginBottom: "25px" }}>
        Explore simple and affordable ways to enhance your home’s beauty and comfort.
      </p>
      <div className="idea-grid">
        {ideas.map((idea, index) => (
          <div className="idea-card" key={index}>
            <h3>{idea.title}</h3>
            <p>{idea.desc}</p>
            <p className="cost">Estimated Cost: <span>{idea.cost}</span></p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Ideas
