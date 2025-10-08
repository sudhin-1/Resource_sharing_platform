import React, { useState } from 'react';

function Live() {
    const [meetings, setMeetings] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        date: '',
        time: '',
        platform: ''
    });
    const [searchTerm, setSearchTerm] = useState('');
    const [editingId, setEditingId] = useState(null);
    const [editData, setEditData] = useState({});

    const platforms = [
        { name: 'Zoom', color: '#2D8CFF' },
        { name: 'Google Meet', color: '#0F9D58' },
        { name: 'Microsoft Teams', color: '#6264A7' },
        { name: 'Skype', color: '#00AFF0' }
    ];

    const handleFormChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleEditChange = (field, value) => {
        setEditData({ ...editData, [field]: value });
    };

    const scheduleMeeting = () => {
        if (formData.title.trim() && formData.date && formData.time && formData.platform) {
            const newMeeting = {
                id: Date.now(),
                ...formData,
                createdDate: new Date().toLocaleDateString(),
            };
            setMeetings([newMeeting, ...meetings]);
            setFormData({ title: '', description: '', date: '', time: '', platform: '' });
        } else {
            alert('Please fill in all required fields');
        }
    };

    const startEdit = (meeting) => {
        setEditingId(meeting.id);
        setEditData({
            title: meeting.title,
            description: meeting.description,
            date: meeting.date,
            time: meeting.time,
            platform: meeting.platform
        });
    };

    const saveEdit = (id) => {
        setMeetings(meetings.map(meeting =>
            meeting.id === id
                ? { ...meeting, ...editData }
                : meeting
        ));
        setEditingId(null);
    };

    const cancelEdit = () => {
        setEditingId(null);
    };

    const deleteMeeting = (id) => {
        if (window.confirm('Are you sure you want to delete this meeting?')) {
            setMeetings(meetings.filter(meeting => meeting.id !== id));
        }
    };

    const filteredMeetings = meetings.filter(({ title, platform }) =>
        [title, platform].some(field =>
            field.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    const getPlatformColor = (platformName) => {
        return platforms.find(p => p.name === platformName)?.color || '#2D8CFF';
    };

    return (
        <div style={{ minHeight: '100vh', padding: '40px 20px' }}>
            <div style={{ maxWidth: 1400, margin: '0 auto 40px' }}>
                <div style={{ background: 'white', borderRadius: 20, padding: '50px', boxShadow: '0 10px 40px rgba(0,0,0,0.15)', textAlign: 'center' }}>
                    <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: 10 }}>
                        Personal helper
                    </h1>
                    <p style={{ color: '#666', fontSize: '1rem' }}>request a helper for doubt sessions</p>
                </div>
            </div>

            <div style={{ maxWidth: 1400, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 30 }}>

                <div style={{ background: 'white', borderRadius: 20, padding: 30, boxShadow: '0 10px 40px rgba(0,0,0,0.15)', height: 'fit-content' }}>
                    <h3 style={{  fontSize: '1.5rem', fontWeight: 'bold', marginBottom: 20 }}>
                        Schedule New Meeting
                    </h3>

                    <div style={{ marginBottom: 20 }}>
                        <label style={{ display: 'block', fontWeight: 600, marginBottom: 8, }}>Meeting Title</label>
                        <input
                            type="text"
                            placeholder="name"
                            value={formData.title}
                            onChange={(e) => handleFormChange('title', e.target.value)}
                            style={{
                                width: '100%',
                                padding: 12,
                                borderRadius: 8,
                                border: '2px solid #e0e0e0',
                                fontSize: '1rem',
                                outline: 'none'
                            }}
                        />
                    </div>

                    <div style={{ marginBottom: 20 }}>
                        <label style={{ display: 'block', fontWeight: 600, marginBottom: 8, color: '#333' }}>Time & Description</label>
                        <textarea
                            placeholder="Meeting details"
                            value={formData.description}
                            onChange={(e) => handleFormChange('description', e.target.value)}
                            rows={3}
                            style={{
                                width: '100%',
                                padding: 12,
                                borderRadius: 8,
                                border: '2px solid #e0e0e0',
                                fontSize: '1rem',
                                outline: 'none',
                                resize: 'vertical',
                                fontFamily: 'inherit'
                            }}
                        />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 15, marginBottom: 20 }}>
                        <div>
                            <label style={{ display: 'block', fontWeight: 600, marginBottom: 8, color: '#333' }}>Date</label>
                            <input
                                type="text"
                                placeholder=""
                                value={formData.date}
                                onChange={(e) => handleFormChange('date', e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: 12,
                                    borderRadius: 8,
                                    border: '2px solid #e0e0e0',
                                    fontSize: '1rem',
                                    outline: 'none'
                                }}
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', fontWeight: 600, marginBottom: 8, color: '#333' }}>Time</label>
                            <input
                                type="text"
                                placeholder=""
                                value={formData.time}
                                onChange={(e) => handleFormChange('time', e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: 12,
                                    borderRadius: 8,
                                    border: '2px solid #e0e0e0',
                                    fontSize: '1rem',
                                    outline: 'none'
                                }}
                            />
                        </div>
                    </div>

                    <div style={{ marginBottom: 20 }}>
                        <label style={{ display: 'block', fontWeight: 600, marginBottom: 8, color: '#333' }}>Platform</label>
                        <select
                            value={formData.platform}
                            onChange={(e) => handleFormChange('platform', e.target.value)}
                            style={{
                                width: '100%',
                                padding: 12,
                                borderRadius: 8,
                                border: '2px solid #e0e0e0',
                                fontSize: '1rem',
                                outline: 'none'
                            }}
                        >
                            <option value="">Select platform</option>
                            {platforms.map(plat => (
                                <option key={plat.name} value={plat.name}>{plat.name}</option>
                            ))}
                        </select>
                    </div>

                    <button
                        onClick={scheduleMeeting}
                        style={{
                            width: '100%',
                            padding: 15,
                            borderRadius: 10,
                            border: 'none',
                            color: 'white',
                            fontSize: '1.1rem',
                            fontWeight: 'bold',
                            cursor: 'pointer'
                        }}
                    >
                        Schedule Meeting
                    </button>
                </div>

                <div style={{ background: 'white', borderRadius: 20, padding: 30, boxShadow: '0 10px 40px rgba(0,0,0,0.15)' }}>
                    <h3 style={{  fontSize: '1.5rem', fontWeight: 'bold', marginBottom: 20 }}>
                        Scheduled Meetings
                    </h3>

                    <div style={{ position: 'relative', marginBottom: 25 }}>
                        <input
                            type="text"
                            placeholder="Search meetings..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '12px 20px',
                                borderRadius: 10,
                                border: '2px solid #e0e0e0',
                                fontSize: '1rem',
                                outline: 'none'
                            }}
                        />
                    </div>

                    <div style={{ display: 'grid', gap: 20, maxHeight: 'calc(100vh - 280px)', overflowY: 'auto', paddingRight: 10 }}>
                        {filteredMeetings.length === 0 ? (
                            <div style={{ textAlign: 'center', padding: '60px 20px', color: '#999' }}>
                                <p style={{ fontSize: '1.1rem' }}>No meetings scheduled yet. Create your first meeting!</p>
                            </div>
                        ) : (
                            filteredMeetings.map(meeting => (
                                <div
                                    key={meeting.id}
                                    style={{
                                        border: '2px solid #e0e0e0',
                                        borderRadius: 15,
                                        padding: 20,
                                        background: 'white'
                                    }}
                                >
                                    {editingId === meeting.id ? (
                                        <div>
                                            <input
                                                value={editData.title}
                                                onChange={(e) => handleEditChange('title', e.target.value)}
                                                placeholder="Meeting Title"
                                                style={{
                                                    width: '100%',
                                                    padding: 10,
                                                    marginBottom: 10,
                                                    borderRadius: 8,
                                                    fontSize: '1rem'
                                                }}
                                            />
                                            <textarea
                                                value={editData.description}
                                                onChange={(e) => handleEditChange('description', e.target.value)}
                                                placeholder="Time & Description"
                                                rows={2}
                                                style={{
                                                    width: '100%',
                                                    padding: 10,
                                                    marginBottom: 10,
                                                    borderRadius: 8,
                                                    fontSize: '1rem',
                                                    resize: 'vertical',
                                                    fontFamily: 'inherit'
                                                }}
                                            />
                                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 10 }}>
                                                <input
                                                    type="text"
                                                    placeholder="e.g., Dec 25, 2024"
                                                    value={editData.date}
                                                    onChange={(e) => handleEditChange('date', e.target.value)}
                                                    style={{
                                                        padding: 10,
                                                        borderRadius: 8,
                                                    }}
                                                />
                                                <input
                                                    type="text"
                                                    placeholder="e.g., 2:30 PM"
                                                    value={editData.time}
                                                    onChange={(e) => handleEditChange('time', e.target.value)}
                                                    style={{
                                                        padding: 10,
                                                        borderRadius: 8,
                                                    }}
                                                />
                                            </div>
                                            <select
                                                value={editData.platform}
                                                onChange={(e) => handleEditChange('platform', e.target.value)}
                                                style={{
                                                    width: '100%',
                                                    padding: 10,
                                                    marginBottom: 10,
                                                    borderRadius: 8,
                                                }}
                                            >
                                                {platforms.map(plat => (
                                                    <option key={plat.name} value={plat.name}>{plat.name}</option>
                                                ))}
                                            </select>
                                            <div style={{ display: 'flex', gap: 10 }}>
                                                <button
                                                    onClick={() => saveEdit(meeting.id)}
                                                    style={{
                                                        flex: 1,
                                                        padding: 12,
                                                        borderRadius: 8,
                                                        border: 'none',
                                                        background: '#27ae60',
                                                        color: 'white',
                                                        fontWeight: 600,
                                                        cursor: 'pointer',
                                                        fontSize: '1rem'
                                                    }}
                                                >
                                                    Save Changes
                                                </button>
                                                <button
                                                    onClick={cancelEdit}
                                                    style={{
                                                        flex: 1,
                                                        padding: 12,
                                                        borderRadius: 8,
                                                        border: '2px solid #e0e0e0',
                                                        background: 'white',
                                                        color: '#333',
                                                        fontWeight: 600,
                                                        cursor: 'pointer',
                                                        fontSize: '1rem'
                                                    }}
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        </div>
                                    ) : (
                                        <div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: 15 }}>
                                                <div style={{ flex: 1 }}>
                                                    <h4 style={{ margin: '0 0 8px 0', color: '#333', fontSize: '1.4rem', fontWeight: 'bold' }}>
                                                        {meeting.title}
                                                    </h4>
                                                    {meeting.description && (
                                                        <p style={{ margin: '0 0 12px 0', color: '#666', fontSize: '0.95rem', lineHeight: 1.5 }}>
                                                            {meeting.description}
                                                        </p>
                                                    )}
                                                </div>
                                                <div style={{ display: 'flex', gap: 8, marginLeft: 15 }}>
                                                    <button
                                                        onClick={() => startEdit(meeting)}
                                                        style={{
                                                            padding: '10px 20px',
                                                            borderRadius: 8,
                                                            border: 'none',
                                                            background: '#f39c12',
                                                            color: 'white',
                                                            cursor: 'pointer',
                                                            fontWeight: 600,
                                                            fontSize: '0.9rem'
                                                        }}
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        onClick={() => deleteMeeting(meeting.id)}
                                                        style={{
                                                            padding: '10px 20px',
                                                            borderRadius: 8,
                                                            border: 'none',
                                                            background: '#e74c3c',
                                                            color: 'white',
                                                            cursor: 'pointer',
                                                            fontWeight: 600,
                                                            fontSize: '0.9rem'
                                                        }}
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </div>

                                            <div style={{
                                                display: 'grid',
                                                gridTemplateColumns: 'repeat(2, 1fr)',
                                                gap: 12,
                                                padding: '15px',
                                                background: '#f8f9fa',
                                                borderRadius: 10,
                                                marginBottom: 12
                                            }}>
                                                <div>
                                                    <p style={{ margin: 0, fontSize: '0.85rem', color: '#888', fontWeight: 600 }}>DATE</p>
                                                    <p style={{ margin: '4px 0 0 0', fontSize: '1rem', color: '#333', fontWeight: 'bold' }}>
                                                        {meeting.date}
                                                    </p>
                                                </div>
                                                <div>
                                                    <p style={{ margin: 0, fontSize: '0.85rem', color: '#888', fontWeight: 600 }}>TIME</p>
                                                    <p style={{ margin: '4px 0 0 0', fontSize: '1rem', color: '#333', fontWeight: 'bold' }}>
                                                        {meeting.time}
                                                    </p>
                                                </div>
                                            </div>

                                            <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                                                <span style={{
                                                    background: getPlatformColor(meeting.platform),
                                                    color: 'white',
                                                    padding: '6px 16px',
                                                    borderRadius: 20,
                                                    fontSize: '0.9rem',
                                                    fontWeight: 600
                                                }}>
                                                    {meeting.platform}
                                                </span>
                                                <span style={{ color: '#999', fontSize: '0.85rem', marginLeft: 'auto' }}>
                                                    Created: {meeting.createdDate}
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

export default Live;