'use client'

import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { X } from 'lucide-react'
import { TaskType, AIPlatform } from '@/types/prompt'

interface FilterModalProps {
  isOpen: boolean
  onClose: () => void
  onApply: (filters: {
    taskTypes: TaskType[]
    aiPlatforms: AIPlatform[]
  }) => void
  initialFilters?: {
    taskTypes: TaskType[]
    aiPlatforms: AIPlatform[]
  }
}

export default function FilterModal({
  isOpen,
  onClose,
  onApply,
  initialFilters = {
    taskTypes: [],
    aiPlatforms: [],
  },
}: FilterModalProps) {
  const [taskTypes, setTaskTypes] = useState<TaskType[]>(initialFilters.taskTypes)
  const [aiPlatforms, setAiPlatforms] = useState<AIPlatform[]>(initialFilters.aiPlatforms)

  const handleApply = () => {
    onApply({ taskTypes, aiPlatforms })
    onClose()
  }

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div className="absolute right-0 top-0 pr-4 pt-4">
                  <button
                    type="button"
                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    onClick={onClose}
                  >
                    <span className="sr-only">Close</span>
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                    <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                      Filter Prompts
                    </Dialog.Title>

                    {/* Task Types */}
                    <div className="mt-6">
                      <h4 className="text-sm font-medium text-gray-900">Task Types</h4>
                      <div className="mt-2 grid grid-cols-2 gap-2">
                        {Object.values(TaskType).map((type) => (
                          <label key={type} className="inline-flex items-center">
                            <input
                              type="checkbox"
                              checked={taskTypes.includes(type)}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setTaskTypes([...taskTypes, type])
                                } else {
                                  setTaskTypes(taskTypes.filter((t) => t !== type))
                                }
                              }}
                              className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            />
                            <span className="ml-2 text-sm text-gray-700">{type}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* AI Platforms */}
                    <div className="mt-6">
                      <h4 className="text-sm font-medium text-gray-900">AI Platforms</h4>
                      <div className="mt-2 grid grid-cols-2 gap-2">
                        {Object.values(AIPlatform).map((platform) => (
                          <label key={platform} className="inline-flex items-center">
                            <input
                              type="checkbox"
                              checked={aiPlatforms.includes(platform)}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setAiPlatforms([...aiPlatforms, platform])
                                } else {
                                  setAiPlatforms(aiPlatforms.filter((p) => p !== platform))
                                }
                              }}
                              className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            />
                            <span className="ml-2 text-sm text-gray-700">{platform}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                    onClick={handleApply}
                  >
                    Apply Filters
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={onClose}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
} 