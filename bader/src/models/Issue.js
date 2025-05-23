 const mongoose = require('mongoose');

const IssueSchema = new mongoose.Schema({
  problemType: { type: String },
  description: { type: String },
  location: { type: String },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  images: [{
    url: { type: String },
    uploadedAt: { type: Date, default: Date.now }
  }],
    reportedAt: { type: Date},
  severityLevel: { type: String, enum: ['high', 'medium', 'low'], default: 'medium' },
  reporterName: { type: String, required: true },
  phone: { type: String, required: true },
  reportedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected', 'converted-to-project'],
    default: 'pending',
  },
  reviewedByAdmin: {
    type: Boolean,
    default: false,
  },
  projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
}, { timestamps: true });

IssueSchema.index({ description: 'text', location: 'text', problemType: 'text' });

module.exports = mongoose.models.Issue || mongoose.model('Issue', IssueSchema);
