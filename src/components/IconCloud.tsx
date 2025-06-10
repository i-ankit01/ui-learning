"use client"
import { useEffect, useMemo, useState } from "react"
import { useTheme } from "next-themes"
import { Cloud, fetchSimpleIcons, renderSimpleIcon } from "react-icon-cloud"

const renderCustomIcon = (icon: any, theme: any) => {
  if (!icon) {
    console.error("Invalid icon object received")
    return null
  }

  const bgHex = theme === "light" ? "#f3f2ef" : "#080510"

  // Keep the original icon without SVG modifications
  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex: "#ffffff",
    minContrastRatio: 1.2,
    size: 45,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e) => e.preventDefault(),
    },
  })
}

export default function IconCloud({ iconSlugs }: any) {
  const [data, setData] = useState<{ simpleIcons: Record<string, any> } | null>(null)
  const { resolvedTheme } = useTheme()

  const cloudProps = useMemo(
    () => ({
      containerProps: {
        style: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "80%",
          paddingTop: 40,
          margin: "0 auto",
          backgroundColor: "transparent",
        },
      },
      options: {
        reverse: true,
        depth: 1,
        wheelZoom: false,
        imageScale: 2,
        activeCursor: "pointer",
        tooltip: "native",
        initial: [0.1, -0.1],
        clickToFront: 500,
        tooltipDelay: 0,
        outlineColour: "transparent",
        maxSpeed: 0.05,
        minSpeed: 0.02,
      },
    }),
    [],
  )

  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then((res) => {
      console.log("Fetched icons:", res)
      const hasValidSVGs = Object.values(res.simpleIcons).every((icon: any) => icon.svg)
      if (!hasValidSVGs) {
        console.warn("Some icons are missing SVGs")
      }
      setData(res)
    })
  }, [iconSlugs])

  const renderedIcons = useMemo(() => {
    if (!data || !resolvedTheme) return []
    return Object.values(data.simpleIcons)
      .filter((icon) => icon)
      .map((icon) => renderCustomIcon(icon, resolvedTheme))
      .filter((icon) => icon)
  }, [data, resolvedTheme])

  return (
    <div
      className="icon-cloud-container"
      style={{
        filter: "brightness(0) invert(1)", // Make all icons white by default
      }}
    >

      <Cloud
        {...cloudProps}
        options={{
          ...cloudProps.options,
          tooltip: "native",
        }}
      >
        {renderedIcons}
      </Cloud>
    </div>
  )
}
