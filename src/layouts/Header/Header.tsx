import React, { useEffect, useState } from 'react'
import ROUTES, { IRouteItem } from '@constants/route'
import { UserIcon } from '@heroicons/react/solid'

import BudgetLogo from '@img/logo-budget.svg'

export type HeaderProps = {
  currentRouteId: string
}

type HeaderSubMenuProps = {
  activeRouteId: string
  setActiveRouteId: React.Dispatch<React.SetStateAction<string>>
}

type HeaderMenuProps = {
  routeLink: string
  routeId: string
  activeRouteId: string | null
  setActiveRouteId: React.Dispatch<React.SetStateAction<string>>
  hasChildren: boolean
}

const HeaderLink = ({
  routeLink,
  routeId,
  activeRouteId,
  hasChildren,
  setActiveRouteId,
}: HeaderMenuProps) => {
  return (
    <div
      onMouseEnter={() => setActiveRouteId(hasChildren ? routeId : '')}
      onMouseLeave={() => setActiveRouteId('')}
      className="group relative h-[80px] inline-flex items-center"
    >
      <span className="group-hover:text-budget-green-500 px-5 londrina text-xl cursor-pointer">
        {routeLink}
      </span>
      {activeRouteId === routeId && hasChildren && (
        <span className="border-t-0 border-l-8 border-r-8 border-b-[12px] border-r-transparent border-l-transparent border-solid absolute bottom-0 left-2/4 -translate-x-2/4"></span>
      )}
    </div>
  )
}

const HeaderSubMenu = ({
  activeRouteId,
  setActiveRouteId,
}: HeaderSubMenuProps) => {
  const children = ROUTES[activeRouteId]?.children
  return !children ? null : (
    <div
      onMouseEnter={() => setActiveRouteId(activeRouteId)}
      onMouseLeave={() => setActiveRouteId('')}
      className="bg-gray-800 w-full h-[50px] absolute pl-[106px] flex items-center"
    >
      {Object.values(children).map((childRoute: IRouteItem, i: number) => {
        return (
          <span
            key={i}
            className="text-white text-sm px-6 cursor-pointer hover:underline"
          >
            {childRoute.title}
          </span>
        )
      })}
    </div>
  )
}

const Header = ({ currentRouteId }: HeaderProps) => {
  const [activeRouteId, setActiveRouteId] = useState<string>(currentRouteId)
  const [isSubmenuVisible, setIsSubmenuVisible] = useState<boolean>(false)

  useEffect(() => {
    setIsSubmenuVisible(Boolean(activeRouteId))
  }, [activeRouteId])

  return (
    <header className="sticky inset-0 bg-white shadow-md z-20">
      <div className="flex items-center px-4 space-x-8 relative">
        <img src={BudgetLogo} className="inline-flex h-[50px] w-[90px]"></img>
        <div className="flex flex-1">
          {Object.keys(ROUTES).map((routeId: string, i) => (
            <HeaderLink
              {...{
                key: routeId,
                routeId,
                routeLink: ROUTES[routeId].title,
                hasChildren: Boolean(ROUTES[routeId].children),
                activeRouteId,
                setActiveRouteId,
              }}
            />
          ))}
        </div>
        <div className="inline-flex items-center space-x-3 hover:text-budget-green-500 cursor-pointer">
          <span className="font-bold text-xl">MijnBudget</span>
          <UserIcon className="h-8 w-8 text-inherit" />
        </div>
      </div>
      {isSubmenuVisible && (
        <HeaderSubMenu
          {...{
            activeRouteId,
            setActiveRouteId,
          }}
        />
      )}
    </header>
  )
}

export default Header
