import React from "react";
import Link from "next/link";
import Button from "./Button";
import LeftArrow from "./icons/LeftArrow";

const SectionHeader = ({
  subtext,
  title,
  description,
  linkHref,
  linkText,
  Icon,
  iconProps,
}) => {
  return (
    <div>
      {subtext && <p className="text-xs text-[#6000D6] mb-4">{subtext}</p>}
      {description ? (
        <>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between text-[32px] lg:text-4xl font-bold mb-4">
            {title}
          </div>
          <div className="flex justify-between items-center mb-4">
            <p className="text-base text-gray-600 mb-4 md:mb-0">
              {description}
            </p>
            {linkHref && (
              <div className="mt-auto md:mt-0 md:flex-shrink-0 flex items-center gap-2">
                <Link href={linkHref} className="inline-block">
                  <Button
                    text={linkText}
                    variant="noBorder"
                    size="medium"
                    iconPosition="right"
                    Icon={Icon} // Use the Icon prop
                    iconProps={iconProps}
                    className="font-bold p-0"
                  />
                </Link>
                {!Icon && <LeftArrow />}
              </div>
            )}
          </div>
        </>
      ) : (
        <div className="flex flex-col md:flex-row md:items-start md:justify-between text-[32px] lg:text-4xl font-bold my-8">
          <h2>{title}</h2>
          {linkHref && (
            <div className="mt-auto md:mt-0 md:flex-shrink-0 flex items-center gap-2">
              <Link href={linkHref} className="inline-block">
                <Button
                  text={linkText}
                  variant="noBorder"
                  size="medium"
                  iconPosition="right"
                  Icon={Icon} // Use the Icon prop
                  iconProps={iconProps}
                  className={`font-bold p-0`}
                />
              </Link>
              {!Icon && <LeftArrow />}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SectionHeader;
