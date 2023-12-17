import React from 'react';

type SectionHeaderProps = {
	children: React.ReactNode;
};

const SectionHeader = ({ children }: SectionHeaderProps) => {
	return <h2 className='mb-4 text-center text-3xl font-medium capitalize sm:mb-8'>{children}</h2>;
};

export default SectionHeader;
