'use client';

import React, { useState } from 'react';
import { Plus, Bell, ChevronDown } from 'lucide-react';
import { TaskCard } from '../../components/TaskCard'; // Import TaskCard component

const projectIcons = {
  web: "💻",
  mobile: "📱",
  research: "🧪",
};

const statusColors = {
  active: 'bg-green-500',
  'in-progress': 'bg-yellow-500',
  planning: 'bg-gray-400',
  completed: 'bg-blue-500',
};

const statusLabels = {
  active: 'Active',
  'in-progress': 'In Progress',
  planning: 'Planning',
  completed: 'Completed',
};

export default function Projects() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    status: 'active' as const,
  });

  const [projects, setProjects] = useState<any[]>([]); // Store project data

  const handleCreateProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    // Default member is you (the user)
    const newProject = {
      id: Date.now(),
      name: formData.name,
      description: formData.description,
      status: formData.status,
      members: [1], // Default to 1 member (your user ID)
      tasks: [
        { id: 1, name: 'Task 1', status: 'pending' },
        { id: 2, name: 'Task 2', status: 'completed' },
      ], // Mock tasks
    };

    setProjects([...projects, newProject]);
    setFormData({ name: '', description: '', status: 'active' });
    setIsCreateModalOpen(false);
  };

  const calculateProgress = (tasks: any[]) => {
    const totalTasks = tasks.length;
    const todoCount = tasks.filter(task => task.status === 'pending').length;
    const inProgressCount = tasks.filter(task => task.status === 'in-progress').length;
    const completedCount = tasks.filter(task => task.status === 'completed').length;

    const progress = Math.round((completedCount / totalTasks) * 100);
    return { todoCount, inProgressCount, completedCount, progress };
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">Nortana</h1>
              <span className="ml-4 text-slate-500">|</span>
              <span className="ml-4 text-gray-600 font-medium">Welcome, User</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-900">
                <Bell className="h-5 w-5" />
              </button>
              <div className="relative">
                <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
                  <div className="h-8 w-8 bg-blue-600 text-white rounded-full flex items-center justify-center">
                    U
                  </div>
                  <ChevronDown className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">My Projects</h1>
              <p className="text-gray-600 mt-1">Manage your team projects and collaborate effectively</p>
            </div>

            <button
              onClick={() => setIsCreateModalOpen(true)}
              className="bg-blue-600 text-white px-6 py-3 rounded-md"
            >
              New Project
            </button>
          </div>

          {/* Create Project Modal */}
          {isCreateModalOpen && (
            <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 z-50">
              <div className="bg-white p-6 rounded-md shadow-lg max-w-sm w-full">
                <h3 className="text-xl font-semibold mb-4">Create New Project</h3>
                <form onSubmit={handleCreateProject}>
                  <div className="mb-4">
                    <label htmlFor="project-name" className="block text-sm font-medium text-gray-700">Project Name</label>
                    <input
                      id="project-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="project-description" className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                      id="project-description"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md"
                      rows={3}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="project-status" className="block text-sm font-medium text-gray-700">Status</label>
                    <select
                      id="project-status"
                      value={formData.status}
                      onChange={(e) => setFormData({ ...formData, status: e.target.value as 'active' | 'in-progress' | 'planning' })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    >
                      <option value="planning">Planning</option>
                      <option value="active">Active</option>
                      <option value="in-progress">In Progress</option>
                    </select>
                  </div>
                  <div className="flex justify-end space-x-3 pt-4">
                    <button
                      type="button"
                      onClick={() => setIsCreateModalOpen(false)}
                      className="px-4 py-2 border border-gray-300 rounded-md"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-blue-600 text-white px-6 py-3 rounded-md"
                    >
                      Create Project
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Plus className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No projects yet</h3>
                <p className="text-gray-600 mb-4">Create your first project to start organizing your tasks and collaborating with your team.</p>
                <button
                  onClick={() => setIsCreateModalOpen(true)}
                  className="bg-blue-600 text-white px-6 py-3 rounded-md"
                >
                  Create Your First Project
                </button>
              </div>
            ) : (
              projects.map((project) => {
                const { todoCount, inProgressCount, completedCount, progress } = calculateProgress(project.tasks);

                return (
                  <div
                    key={project.id}
                    className="p-6 border rounded-lg hover:shadow-lg cursor-pointer"
                  >
                    <div className="flex justify-between items-center mb-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                        <span className="text-xl">{projectIcons.web}</span>
                      </div>
                      <span className={`w-2 h-2 rounded-full ${statusColors[project.status]}`} />
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{project.description}</p>

                    {/* Task Status Summary */}
                    <div className="flex justify-between items-center text-xs text-gray-600 mb-4">
                      <div className="flex items-center">
                        <span className="w-2 h-2 rounded-full bg-red-500 mr-2" />
                        To Do: {todoCount}
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 rounded-full bg-yellow-500 mr-2" />
                        In Progress: {inProgressCount}
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 rounded-full bg-green-500 mr-2" />
                        Completed: {completedCount}
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                      <div
                        className="h-2 rounded-full"
                        style={{
                          width: `${progress}%`,
                          backgroundColor: progress === 100 ? 'green' : progress > 0 ? 'yellow' : 'red',
                        }}
                      />
                    </div>

                   
                  </div>
                );
              })
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
