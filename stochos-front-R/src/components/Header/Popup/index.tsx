import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Fragment } from 'react'

const grupo = [
  {
    name: 'Grupo',
    href: '##',
  },
  {
    name: 'Criar Grupo',
    href: '##',
  },
  {
    name: 'Deletar Grupo',
    href: '##',
  },
]

export default function Example() {
  return (
    <div className="">
      <Popover className="fixed">
        {({ open }) => (
          <>
            <Popover.Button>
              <span>Grupo</span>
              <ChevronDownIcon/>
            </Popover.Button>
           
              <Popover.Panel >
                <div>
                  <div>
                    {grupo.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                      >
                        
                        <div>
                          <p>
                            {item.name}
                          </p>
                          
                        </div>
                      </a>
                    ))}
                  </div>
                  <div>
                    <a
                      href="##"
                    >
                      <span >
                        <span >
                          Documentation
                        </span>
                      </span>
                      <span>
                        Start integrating products and tools
                      </span>
                    </a>
                  </div>
                </div>
              </Popover.Panel>
          </>
        )}
      </Popover>
    </div>
  )
}


