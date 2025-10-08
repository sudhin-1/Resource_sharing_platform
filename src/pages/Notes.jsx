import React, { useState } from 'react';
import { Book, Plus, Search, Edit2, Trash2 } from 'lucide-react';

function Notes() {
  const [resources, setResources] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [level, setLevel] = useState('Basic');
  const [searchTerm, setSearchTerm] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const [editCategory, setEditCategory] = useState('');
  const [editLevel, setEditLevel] = useState('');

  const categories = [
    { name: 'Listening & Speaking', color: '#4A90E2' },
    { name: 'Reading & Writing', color: '#E94B3C' },
    { name: 'Grammar', color: '#50C878' },
    { name: 'Vocabulary', color: '#9B59B6' }
  ];

  const levels = ['Basic', 'B2', 'C1'];

  const addResource = () => {
    if (title.trim() && description.trim() && category) {
      const newResource = {
        id: Date.now(),
        title,
        description,
        category,
        level,
        createdDate: new Date().toLocaleDateString(),
      };
      setResources([newResource, ...resources]);
      setTitle('');
      setDescription('');
      setCategory('');
      setLevel('Basic');
    } else {
      alert('Please fill in all required fields');
    }
  };

  const startEdit = (resource) => {
    setEditingId(resource.id);
    setEditTitle(resource.title);
    setEditDescription(resource.description);
    setEditCategory(resource.category);
    setEditLevel(resource.level);
  };

  const saveEdit = (id) => {
    setResources(resources.map(resource => 
      resource.id === id 
        ? { ...resource, title: editTitle, description: editDescription, category: editCategory, level: editLevel }
        : resource
    ));
    setEditingId(null);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditTitle('');
    setEditDescription('');
    setEditCategory('');
    setEditLevel('');
  };

  const deleteResource = (id) => {
    setResources(resources.filter(resource => resource.id !== id));
  };

  const filteredResources = resources.filter(({ title, category, description }) =>
    [title, category, description].some(field =>
      field.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const getCategoryColor = (categoryName) => {
    return categories.find(c => c.name === categoryName)?.color || '#4A90E2';
  };

  return (
    <div style={{ minHeight: '100vh', padding: '40px 20px', background: '#f5f7fa' }}>
      
      <div style={{ maxWidth: 1400, margin: '0 auto 40px' }}>
        <div style={{ background: 'white', borderRadius: 20, padding: '40px', boxShadow: '0 10px 40px rgba(0,0,0,0.1)', textAlign: 'center' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#667eea', marginBottom: 10 }}>
            Your Favourite Resource Sharing Website
          </h1>
          <p style={{ color: '#666', fontSize: '1.1rem' }}>Create and manage your learning resources</p>
        </div>
      </div>

      <div style={{ maxWidth: 1400, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 30 }}>
        
        
        <div style={{ background: 'white', borderRadius: 20, padding: 30, boxShadow: '0 10px 40px rgba(0,0,0,0.1)', height: 'fit-content' }}>
          <h3 style={{ color: '#667eea', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 10 }}>
            Add New Resource
          </h3>

          <div style={{ marginBottom: 20 }}>
            <label style={{ display: 'block', fontWeight: 600, marginBottom: 8, color: '#333' }}>Resource Title </label>
            <input
              type="text"
              placeholder=""
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{
                width: '100%',
                padding: 12,
                borderRadius: 8,
                border: '2px solid #e0e0e0',
                fontSize: '1rem',
                outline: 'none',
                transition: 'border 0.3s'
              }}
            />
          </div>

          <div style={{ marginBottom: 20 }}>
            <label style={{ display: 'block', fontWeight: 600, marginBottom: 8, color: '#333' }}>Description </label>
            <textarea
              placeholder=""
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              style={{
                width: '100%',
                padding: 12,
                borderRadius: 8,
                border: '2px solid #e0e0e0',
                fontSize: '1rem',
                outline: 'none',
                transition: 'border 0.3s',
                resize: 'vertical',
                fontFamily: 'inherit'
              }}
            />
          </div>

          <div style={{ marginBottom: 20 }}>
            <label style={{ display: 'block', fontWeight: 600, marginBottom: 8, color: '#333' }}>Category *</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              style={{
                width: '100%',
                padding: 12,
                borderRadius: 8,
                border: '2px solid #e0e0e0',
                fontSize: '1rem',
                outline: 'none'
              }}
            >
              <option value="">Select a category</option>
              {categories.map(cat => (
                <option key={cat.name} value={cat.name}>{cat.name}</option>
              ))}
            </select>
          </div>

          <div style={{ marginBottom: 20 }}>
            <label style={{ display: 'block', fontWeight: 600, marginBottom: 8, color: '#333' }}>Level </label>
            <div style={{ display: 'flex', gap: 10 }}>
              {levels.map(lvl => (
                <button
                  key={lvl}
                  onClick={() => setLevel(lvl)}
                  style={{
                    flex: 1,
                    padding: '10px',
                    borderRadius: 8,
                    border: '2px solid',
                    borderColor: level === lvl ? '#333' : '#e0e0e0',
                    background: level === lvl ? '#333' : 'white',
                    color: level === lvl ? 'white' : '#333',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.3s'
                  }}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={addResource}
            style={{
              width: '100%',
              padding: 15,
              borderRadius: 10,
              border: 'none',
              color: 'white',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 10,
              transition: 'transform 0.2s'
            }}
          >
            <Plus size={20} /> Add Resource
          </button>
        </div>

        {/* Resources Library */}
        <div style={{ background: 'white', borderRadius: 20, padding: 30, boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}>
          <h3 style={{ color: '#667eea', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: 20 }}>
            Resource Library
          </h3>

          <div style={{ position: 'relative', marginBottom: 25 }}>
            <Search size={20} style={{ position: 'absolute', left: 15, top: '50%', transform: 'translateY(-50%)', color: '#999' }} />
            <input
              type="text"
              placeholder="Search resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 12px 12px 45px',
                borderRadius: 10,
                border: '2px solid #e0e0e0',
                fontSize: '1rem',
                outline: 'none'
              }}
            />
          </div>

          <div style={{ display: 'grid', gap: 20, maxHeight: 'calc(100vh - 280px)', overflowY: 'auto', paddingRight: 10 }}>
            {filteredResources.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '60px 20px', color: '#999' }}>
                <Book size={64} style={{ opacity: 0.3, marginBottom: 20 }} />
                <p>No resources added yet. Create your first resource!</p>
              </div>
            ) : (
              filteredResources.map(resource => (
                <div
                  key={resource.id}
                  style={{
                    border: '2px solid #e0e0e0',
                    borderRadius: 15,
                    padding: 20,
                    transition: 'all 0.3s',
                    background: 'white'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {editingId === resource.id ? (
                    // Edit Mode
                    <div>
                      <input
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                        placeholder="Title"
                        style={{
                          width: '100%',
                          padding: 10,
                          marginBottom: 10,
                          borderRadius: 8,
                          border: '2px solid #667eea',
                          fontSize: '1rem'
                        }}
                      />
                      <textarea
                        value={editDescription}
                        onChange={(e) => setEditDescription(e.target.value)}
                        placeholder="Description"
                        rows={3}
                        style={{
                          width: '100%',
                          padding: 10,
                          marginBottom: 10,
                          borderRadius: 8,
                          border: '2px solid #667eea',
                          fontSize: '1rem',
                          resize: 'vertical',
                          fontFamily: 'inherit'
                        }}
                      />
                      <select
                        value={editCategory}
                        onChange={(e) => setEditCategory(e.target.value)}
                        style={{
                          width: '100%',
                          padding: 10,
                          marginBottom: 10,
                          borderRadius: 8,
                          border: '2px solid #667eea'
                        }}
                      >
                        {categories.map(cat => (
                          <option key={cat.name} value={cat.name}>{cat.name}</option>
                        ))}
                      </select>
                      <div style={{ display: 'flex', gap: 10, marginBottom: 10 }}>
                        {levels.map(lvl => (
                          <button
                            key={lvl}
                            onClick={() => setEditLevel(lvl)}
                            style={{
                              flex: 1,
                              padding: 8,
                              borderRadius: 6,
                              border: '2px solid',
                              borderColor: editLevel === lvl ? '#667eea' : '#e0e0e0',
                              background: editLevel === lvl ? '#667eea' : 'white',
                              color: editLevel === lvl ? 'white' : '#333',
                              cursor: 'pointer'
                            }}
                          >
                            {lvl}
                          </button>
                        ))}
                      </div>
                      <div style={{ display: 'flex', gap: 10 }}>
                        <button
                          onClick={() => saveEdit(resource.id)}
                          style={{
                            flex: 1,
                            padding: 10,
                            borderRadius: 8,
                            border: 'none',
                            background: '#27ae60',
                            color: 'white',
                            fontWeight: 600,
                            cursor: 'pointer'
                          }}
                        >
                          Save
                        </button>
                        <button
                          onClick={cancelEdit}
                          style={{
                            flex: 1,
                            padding: 10,
                            borderRadius: 8,
                            border: '2px solid #e0e0e0',
                            background: 'white',
                            color: '#333',
                            fontWeight: 600,
                            cursor: 'pointer'
                          }}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    // View Mode
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: 12 }}>
                        <div style={{ flex: 1 }}>
                          <h4 style={{ margin: '0 0 8px 0', color: '#333', fontSize: '1.3rem', fontWeight: 'bold' }}>
                            {resource.title}
                          </h4>
                          <p style={{ margin: '0 0 12px 0', color: '#666', fontSize: '0.95rem', lineHeight: 1.5 }}>
                            {resource.description}
                          </p>
                        </div>
                        <div style={{ display: 'flex', gap: 8, marginLeft: 15 }}>
                          <button
                            onClick={() => startEdit(resource)}
                            style={{
                              padding: '10px 16px',
                              borderRadius: 8,
                              border: 'none',
                              background: '#f39c12',
                              color: 'white',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              gap: 6
                            }}
                          >
                            <Edit2 size={18} />
                          </button>
                          <button
                            onClick={() => deleteResource(resource.id)}
                            style={{
                              padding: '10px 16px',
                              borderRadius: 8,
                              border: 'none',
                              background: '#e74c3c',
                              color: 'white',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              gap: 6
                            }}
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                      <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                        <span style={{
                          background: getCategoryColor(resource.category),
                          color: 'white',
                          padding: '5px 14px',
                          borderRadius: 20,
                          fontSize: '0.85rem',
                          fontWeight: 600
                        }}>
                          {resource.category}
                        </span>
                        <span style={{
                          background: '#f0f0f0',
                          color: '#666',
                          padding: '5px 14px',
                          borderRadius: 20,
                          fontSize: '0.85rem',
                          fontWeight: 600
                        }}>
                          {resource.level}
                        </span>
                        <span style={{ color: '#999', fontSize: '0.85rem', marginLeft: 'auto' }}>
                          Created: {resource.createdDate}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notes;